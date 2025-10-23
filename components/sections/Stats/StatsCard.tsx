"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIntersectionObserver } from "@/lib/hooks";

interface StatsCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  description?: string;
  comparisonBadge?: string;
  icon?: React.ReactNode;
}

export function StatsCard({
  value,
  label,
  suffix = "",
  prefix = "",
  decimals = 0,
  description,
  comparisonBadge,
  icon,
}: StatsCardProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [cardRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const cardContent = (
    <Card
      ref={cardRef}
      className="relative overflow-hidden border-dark-lighter bg-dark-card p-6 transition-all duration-300 hover:border-neon-green/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]"
    >
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-neon-green/5 via-transparent to-neon-purple/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Icon */}
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neon-green/10 text-neon-green">
            {icon}
          </div>
        )}

        {/* Value with CountUp animation */}
        <div className="flex items-baseline gap-2">
          <span className="bg-linear-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-5xl font-bold text-transparent">
            {hasAnimated ? (
              <CountUp
                start={0}
                end={value}
                duration={2.5}
                decimals={decimals}
                prefix={prefix}
                suffix={suffix}
                separator=","
              />
            ) : (
              `${prefix}0${suffix}`
            )}
          </span>
        </div>

        {/* Label */}
        <p className="text-lg font-medium text-gray-300">{label}</p>

        {/* Comparison badge */}
        {comparisonBadge && (
          <Badge
            variant="outline"
            className="w-fit border-neon-green/30 bg-neon-green/10 text-neon-green"
          >
            {comparisonBadge}
          </Badge>
        )}
      </div>
    </Card>
  );

  // If description exists, wrap in Tooltip
  if (description) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{cardContent}</TooltipTrigger>
          <TooltipContent
            side="top"
            className="max-w-[300px] border-dark-lighter bg-dark-card p-4"
          >
            <p className="text-sm text-gray-300">{description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return cardContent;
}


"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  previewImage?: string;
  stats?: string;
  index: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  previewImage,
  stats,
  index,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <Card
        className={cn(
          "relative h-full overflow-hidden",
          "bg-linear-to-br from-zinc-900 via-zinc-900 to-zinc-950",
          "border border-zinc-800/50",
          "transition-all duration-500",
          "hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10",
          "hover:-translate-y-1"
        )}
      >
        {/* Main Content */}
        <div className="relative z-10 p-6 space-y-4">
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-linear-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400"
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-400 leading-relaxed">
            {description}
          </p>

          {/* Stats Badge */}
          {stats && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-xs font-semibold text-cyan-400">{stats}</span>
            </div>
          )}
        </div>

        {/* Hover Preview Image */}
        {previewImage && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={
              isHovered
                ? { opacity: 0.15, scale: 1 }
                : { opacity: 0, scale: 1.1 }
            }
            transition={{ duration: 0.4 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${previewImage})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
          </motion.div>
        )}

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          }}
        />
      </Card>
    </motion.div>
  );
}


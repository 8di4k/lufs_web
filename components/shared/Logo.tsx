"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  href?: string;
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

const textSizeMap = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

/**
 * Animated LUFS logo component with gradient and hover effects
 * @param size - Logo size: sm (32px), md (48px), lg (64px)
 * @param showText - Whether to show "LUFS" text next to the logo
 * @param className - Additional CSS classes
 * @param href - Optional link href (defaults to "/")
 */
export function Logo({
  size = "md",
  showText = true,
  className,
  href = "/",
}: LogoProps) {
  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      {/* SVG Logo with gradient and animation */}
      <svg
        className={cn(
          sizeMap[size],
          "transition-all duration-300 ease-out",
          "hover:scale-110 hover:rotate-3",
          "drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]",
          "hover:drop-shadow-[0_0_16px_rgba(0,255,136,0.8)]"
        )}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" />
            <stop offset="50%" stopColor="#ff00ff" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Waveform visualization */}
        <g filter="url(#glow)">
          {/* Sound waves */}
          <rect
            x="15"
            y="40"
            width="6"
            height="20"
            rx="3"
            fill="url(#logoGradient)"
          >
            <animate
              attributeName="height"
              values="20;35;20"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="40;32.5;40"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="28"
            y="30"
            width="6"
            height="40"
            rx="3"
            fill="url(#logoGradient)"
          >
            <animate
              attributeName="height"
              values="40;55;40"
              dur="1.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="30;22.5;30"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="41"
            y="25"
            width="6"
            height="50"
            rx="3"
            fill="url(#logoGradient)"
          >
            <animate
              attributeName="height"
              values="50;65;50"
              dur="1.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="25;17.5;25"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="54"
            y="35"
            width="6"
            height="30"
            rx="3"
            fill="url(#logoGradient)"
          >
            <animate
              attributeName="height"
              values="30;45;30"
              dur="1.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="35;27.5;35"
              dur="1.4s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="67"
            y="38"
            width="6"
            height="24"
            rx="3"
            fill="url(#logoGradient)"
          >
            <animate
              attributeName="height"
              values="24;38;24"
              dur="1.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="38;31;38"
              dur="1.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="80"
            y="33"
            width="6"
            height="34"
            rx="3"
            fill="url(#logoGradient)"
          >
            <animate
              attributeName="height"
              values="34;48;34"
              dur="1.3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="33;26;33"
              dur="1.3s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </svg>

      {/* Text Logo */}
      {showText && (
        <span
          className={cn(
            textSizeMap[size],
            "font-heading font-bold",
            "bg-gradient-to-r from-neon-green via-neon-purple to-neon-cyan",
            "bg-clip-text text-transparent",
            "transition-all duration-300",
            "hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]"
          )}
        >
          LUFS
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}


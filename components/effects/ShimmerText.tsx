"use client";

import { cn } from "@/lib/utils";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export function ShimmerText({
  children,
  className = "",
  shimmerWidth = 100,
}: ShimmerTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block bg-gradient-to-r from-transparent via-white/80 to-transparent bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundSize: `${shimmerWidth}% 100%`,
        animation: "shimmer 3s infinite linear",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -${shimmerWidth}% 0;
          }
          100% {
            background-position: ${shimmerWidth}% 0;
          }
        }
      `}</style>
    </span>
  );
}


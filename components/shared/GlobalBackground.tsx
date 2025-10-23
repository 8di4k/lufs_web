"use client";

import { memo } from "react";

/**
 * Unified seamless background for entire site
 * Ultra-subtle gradient that doesn't distract
 * No visible seams between sections
 */
export const GlobalBackground = memo(function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Ultra-subtle ambient gradient */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.05) 0%, transparent 70%)
          `,
        }}
      />
      
      {/* Noise texture for depth (optional) */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
});


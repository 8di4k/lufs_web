"use client";

import { Brain, Zap, Globe, DollarSign } from "lucide-react";
import { StatsCard } from "./StatsCard";

const statsData = [
  {
    value: 94,
    label: "BPM Detection Accuracy",
    suffix: "%",
    decimals: 0,
    icon: <Brain className="h-6 w-6" />,
    description:
      "Average accuracy across 12 AI models. Core engines: DeepRhythm, Essentia, Librosa, S-KEY. Tested on 10,000+ tracks.",
    comparisonBadge: "15% better than competitors",
  },
  {
    value: 12.5,
    label: "Average Analysis Time",
    suffix: "s",
    decimals: 1,
    icon: <Zap className="h-6 w-6" />,
    description:
      "Lightning-fast analysis powered by optimized AI models running on high-performance servers. Most tracks analyzed in 10-15 seconds.",
    comparisonBadge: "3x faster than average",
  },
  {
    value: 1000,
    label: "Supported Platforms",
    suffix: "+",
    decimals: 0,
    icon: <Globe className="h-6 w-6" />,
    description:
      "Download music from YouTube, SoundCloud, Spotify, Apple Music, TikTok, and 1000+ other platforms. Universal format support.",
    comparisonBadge: "Most comprehensive",
  },
  {
    value: 3.99,
    label: "Monthly Plan",
    prefix: "$",
    decimals: 2,
    icon: <DollarSign className="h-6 w-6" />,
    description:
      "Unlimited analyses, priority processing, and access to all features. Cancel anytime. No hidden fees.",
    comparisonBadge: "Best value in market",
  },
];

export function Stats() {
  return (
    <section
      id="stats"
      className="relative bg-black py-16 sm:py-20"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="mb-3 sm:mb-4 bg-linear-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent px-2">
            Powered by Numbers
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-gray-400 px-4">
            Industry-leading accuracy, speed, and coverage. See why thousands
            trust LUFS Music Analyzer.
          </p>
        </div>

        {/* Stats grid - Mobile scroll with indicators */}
        <div className="relative">
          {/* Mobile: Horizontal scroll */}
          <div className="lg:hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
              {statsData.map((stat, index) => (
                <div key={index} className="min-w-[280px] snap-start shrink-0">
                  <StatsCard
                    value={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                    icon={stat.icon}
                    description={stat.description}
                    comparisonBadge={stat.comparisonBadge}
                  />
                </div>
              ))}
            </div>
            
            {/* Scroll indicator for mobile */}
            <div className="flex justify-center gap-2 mt-4">
              {statsData.map((_, index) => (
                <div 
                  key={index} 
                  className="w-2 h-2 rounded-full bg-zinc-700"
                  aria-hidden="true"
                />
              ))}
            </div>
            
            <p className="text-center text-xs text-gray-500 mt-3">
              ← Swipe to see more →
            </p>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div key={index}>
                <StatsCard
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                  icon={stat.icon}
                  description={stat.description}
                  comparisonBadge={stat.comparisonBadge}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


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
      "Average accuracy across 5 AI models (PyTorch, TensorFlow, Essentia, Librosa, Madmom). Tested on 10,000+ tracks.",
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
      className="relative border-b border-dark-lighter bg-linear-to-b from-dark via-dark-lighter to-dark py-24"
    >
      {/* Background grid effect */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-linear-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Powered by Numbers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Industry-leading accuracy, speed, and coverage. See why thousands
            trust LUFS Music Analyzer.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              prefix={stat.prefix}
              decimals={stat.decimals}
              icon={stat.icon}
              description={stat.description}
              comparisonBadge={stat.comparisonBadge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


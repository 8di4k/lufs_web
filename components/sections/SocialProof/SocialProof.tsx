"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { Star, Users, Music, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/lib/hooks";

const trustIndicators = [
  {
    icon: <Users className="h-8 w-8" />,
    value: 10000,
    suffix: "+",
    label: "Active Users",
    color: "text-neon-green",
  },
  {
    icon: <Music className="h-8 w-8" />,
    value: 1000000,
    suffix: "+",
    label: "Tracks Analyzed",
    color: "text-neon-cyan",
  },
  {
    icon: <Star className="h-8 w-8" />,
    value: 4.9,
    decimals: 1,
    suffix: "/5",
    label: "User Rating",
    color: "text-neon-purple",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: 2000,
    suffix: "+",
    label: "Reviews",
    color: "text-neon-pink",
  },
];

const platformLogos = [
  { name: "YouTube", emoji: "📺", url: "https://youtube.com" },
  { name: "SoundCloud", emoji: "☁️", url: "https://soundcloud.com" },
  { name: "TikTok", emoji: "🎬", url: "https://tiktok.com" },
  { name: "Instagram", emoji: "📸", url: "https://instagram.com" },
  { name: "Beatstars", emoji: "⭐", url: "https://beatstars.com" },
  { name: "Traktrain", emoji: "🎹", url: "https://traktrain.com" },
  { name: "Direct Upload", emoji: "📤", url: null },
];

export function SocialProof() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="social-proof"
      className="relative border-b border-dark-lighter bg-dark py-24"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-neon-green/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-neon-purple/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-neon-green/30 bg-neon-green/10 text-neon-green"
          >
            Trusted by Thousands
          </Badge>
          <h2 className="mb-4 bg-linear-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Join the Community
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Thousands of musicians, producers, and audio engineers trust LUFS
            Music Analyzer for their audio analysis needs.
          </p>
        </div>

        {/* Trust indicators grid */}
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 rounded-xl border border-dark-lighter bg-dark-card p-6 transition-all duration-300 hover:border-neon-green/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]"
            >
              <div className={`${indicator.color}`}>{indicator.icon}</div>
              <div className="text-center">
                <div
                  className={`mb-2 text-4xl font-bold ${indicator.color} md:text-5xl`}
                >
                  {hasAnimated ? (
                    <CountUp
                      start={0}
                      end={indicator.value}
                      duration={2.5}
                      decimals={indicator.decimals || 0}
                      suffix={indicator.suffix}
                      separator=","
                    />
                  ) : (
                    `0${indicator.suffix}`
                  )}
                </div>
                <p className="text-sm text-gray-400">{indicator.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform support marquee */}
        <div className="rounded-xl border border-dark-lighter bg-dark-card p-8">
          <h3 className="mb-6 text-center text-xl font-semibold text-gray-300">
            Supporting 1000+ platforms including:
          </h3>
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            {platformLogos.concat(platformLogos).map((platform, index) => {
              const content = (
                <>
                  <span className="text-3xl">{platform.emoji}</span>
                  <span className="whitespace-nowrap text-lg font-medium text-gray-300">
                    {platform.name}
                  </span>
                </>
              );

              if (platform.url) {
                return (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-6 flex items-center gap-3 rounded-lg border border-dark-lighter bg-dark-lighter/50 px-6 py-4 transition-all duration-300 hover:border-neon-green/40 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)] hover:scale-105 cursor-pointer"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={index}
                  className="mx-6 flex items-center gap-3 rounded-lg border border-dark-lighter bg-dark-lighter/50 px-6 py-4 transition-all duration-300 hover:border-neon-green/40 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]"
                >
                  {content}
                </div>
              );
            })}
          </Marquee>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Badge
            variant="outline"
            className="border-neon-green/30 bg-neon-green/5 px-4 py-2 text-sm text-neon-green"
          >
            ⚡ Lightning Fast Analysis
          </Badge>
          <Badge
            variant="outline"
            className="border-neon-cyan/30 bg-neon-cyan/5 px-4 py-2 text-sm text-neon-cyan"
          >
            🔒 100% Private & Secure
          </Badge>
          <Badge
            variant="outline"
            className="border-neon-purple/30 bg-neon-purple/5 px-4 py-2 text-sm text-neon-purple"
          >
            🎯 90-97% Accuracy
          </Badge>
          <Badge
            variant="outline"
            className="border-neon-pink/30 bg-neon-pink/5 px-4 py-2 text-sm text-neon-pink"
          >
            💎 Best Price in Market
          </Badge>
        </div>
      </div>
    </section>
  );
}


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
      className="relative bg-black py-16 sm:py-20"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-3 sm:mb-4 border-neon-green/30 bg-neon-green/10 text-neon-green text-xs sm:text-sm"
          >
            Trusted by Thousands
          </Badge>
          <h2 className="mb-3 sm:mb-4 bg-linear-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent px-2">
            Join the Community
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-gray-400 px-4">
            Thousands of musicians, producers, and audio engineers trust LUFS
            Music Analyzer for their audio analysis needs.
          </p>
        </div>

        {/* Trust indicators grid */}
        <div className="mb-12 sm:mb-16 grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 rounded-lg sm:rounded-xl border border-dark-lighter bg-dark-card p-4 sm:p-6 transition-all duration-300 hover:border-neon-green/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] active:scale-95"
            >
              <div className={`${indicator.color} scale-75 sm:scale-100`}>{indicator.icon}</div>
              <div className="text-center">
                <div
                  className={`mb-1 sm:mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${indicator.color}`}
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
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 leading-tight">{indicator.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform support marquee */}
        <div className="rounded-lg sm:rounded-xl border border-dark-lighter bg-dark-card p-4 sm:p-6 md:p-8 overflow-hidden">
          <h3 className="mb-4 sm:mb-6 text-center text-base sm:text-lg md:text-xl font-semibold text-gray-300">
            Supporting 1000+ platforms including:
          </h3>
          <Marquee gradient={false} speed={40} pauseOnHover={false}>
            {platformLogos.concat(platformLogos).map((platform, index) => {
              const content = (
                <>
                  <span className="text-xl sm:text-2xl md:text-3xl">{platform.emoji}</span>
                  <span className="whitespace-nowrap text-sm sm:text-base md:text-lg font-medium text-gray-300">
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
                    className="mx-3 sm:mx-4 md:mx-6 flex items-center gap-2 sm:gap-3 rounded-lg border border-dark-lighter bg-dark-lighter/50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 transition-all duration-300 hover:border-neon-green/40 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)] cursor-pointer active:scale-95"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={index}
                  className="mx-3 sm:mx-4 md:mx-6 flex items-center gap-2 sm:gap-3 rounded-lg border border-dark-lighter bg-dark-lighter/50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 transition-all duration-300 hover:border-neon-green/40 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]"
                >
                  {content}
                </div>
              );
            })}
          </Marquee>
        </div>

        {/* Trust badges */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <Badge
            variant="outline"
            className="border-neon-green/30 bg-neon-green/5 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm text-neon-green"
          >
            ⚡ Lightning Fast
          </Badge>
          <Badge
            variant="outline"
            className="border-neon-cyan/30 bg-neon-cyan/5 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm text-neon-cyan"
          >
            🔒 100% Private
          </Badge>
          <Badge
            variant="outline"
            className="border-neon-purple/30 bg-neon-purple/5 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm text-neon-purple"
          >
            🎯 90-97% Accuracy
          </Badge>
          <Badge
            variant="outline"
            className="border-neon-pink/30 bg-neon-pink/5 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm text-neon-pink"
          >
            💎 Best Price
          </Badge>
        </div>
      </div>
    </section>
  );
}


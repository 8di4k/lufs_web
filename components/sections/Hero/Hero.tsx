"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroBackground } from "./HeroBackground";
import { HeroVisualization } from "./HeroVisualization";
import { Send, Play, Users, TrendingUp } from "lucide-react";
import { CTA_COPY, SOCIAL_PROOF, URGENCY, TELEGRAM_BOT_URL } from "@/lib/constants/cta";

export function Hero() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const title = "LUFS";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black py-16 sm:py-20">
      {/* Animated Background */}
      <HeroBackground />
      
      {/* 3D Visualization */}
      <HeroVisualization />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
        {/* Title with text reveal animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-4 sm:mb-6 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight">
            <span className="block">
              <motion.span className="inline-block">
                {title.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="neon-glow-green inline-block text-neon-green"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-2 sm:mt-3 block bg-linear-to-r from-neon-purple to-neon-cyan bg-clip-text text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              Music Analyzer
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-foreground mx-auto mb-6 sm:mb-8 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl px-2"
        >
          Professional Audio Analysis Powered by{" "}
          <span className="font-semibold text-neon-cyan">AI</span>
        </motion.p>

        {/* Stats Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-8 sm:mb-12 flex flex-col min-[500px]:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2"
        >
          <div className="glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base whitespace-nowrap">
            <span className="font-bold text-neon-green">90-97%</span> Accuracy
          </div>
          <div className="glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base whitespace-nowrap">
            <span className="font-bold text-neon-purple">10-15s</span> Analysis
          </div>
          <div className="glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base whitespace-nowrap">
            <span className="font-bold text-neon-cyan">1000+</span> Platforms
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-4 sm:gap-6 px-2"
        >
          {/* Urgency Badge (if enabled) */}
          {URGENCY.show && (
            <Badge variant="neon" className="animate-pulse text-xs sm:text-sm">
              {URGENCY.text}
            </Badge>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto h-[52px] sm:h-[56px] group relative bg-linear-to-r from-neon-green to-emerald-500 px-6 sm:px-8 text-sm sm:text-base md:text-lg font-semibold text-black shadow-lg shadow-neon-green/50 transition-all duration-300 hover:scale-105 hover:from-neon-green hover:to-emerald-400 hover:shadow-neon-green/70 active:scale-95"
                asChild
              >
                <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  {CTA_COPY.primary.text}
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-[52px] sm:h-[56px] border-white/20 px-6 sm:px-8 text-sm sm:text-base md:text-lg transition-all duration-300 hover:border-white/40 hover:bg-white/5 active:scale-95"
                onClick={scrollToDemo}
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {CTA_COPY.secondary.text}
              </Button>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 text-center">⚡ {CTA_COPY.primary.microcopy}</p>
          </div>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Badge variant="neon" className="gap-1.5 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 text-xs whitespace-nowrap">
              <Users className="h-3 w-3" />
              {SOCIAL_PROOF.users}
            </Badge>
            <Badge variant="cyan" className="gap-1.5 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 text-xs whitespace-nowrap">
              <TrendingUp className="h-3 w-3" />
              {SOCIAL_PROOF.analyses}
            </Badge>
            <Badge variant="purple" className="gap-1.5 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 text-xs whitespace-nowrap">
              ⭐ {SOCIAL_PROOF.rating}
            </Badge>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 transform hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-foreground/50 text-[10px] uppercase tracking-wider">Scroll</span>
          <svg
            className="text-foreground/50 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}


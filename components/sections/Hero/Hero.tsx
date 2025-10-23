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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <HeroBackground />
      
      {/* 3D Visualization */}
      <HeroVisualization />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Title with text reveal animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">
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
              className="mt-4 block bg-linear-to-r from-neon-purple to-neon-cyan bg-clip-text text-3xl text-transparent md:text-5xl lg:text-6xl"
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
          className="text-foreground mx-auto mb-8 max-w-3xl text-lg md:text-xl lg:text-2xl"
        >
          Professional Audio Analysis Powered by{" "}
          <span className="font-semibold text-neon-cyan">AI</span>
        </motion.p>

        {/* Stats Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="glass rounded-full px-4 py-2">
            <span className="font-bold text-neon-green">90-97%</span> Accuracy
          </div>
          <div className="glass rounded-full px-4 py-2">
            <span className="font-bold text-neon-purple">10-15s</span> Analysis
          </div>
          <div className="glass rounded-full px-4 py-2">
            <span className="font-bold text-neon-cyan">1000+</span> Platforms
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Urgency Badge (if enabled) */}
          {URGENCY.show && (
            <Badge variant="neon" className="animate-pulse text-sm">
              {URGENCY.text}
            </Badge>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex flex-col items-center gap-2">
              <Button
                size="lg"
                className="group relative bg-linear-to-r from-neon-green to-emerald-500 px-8 py-6 text-lg font-semibold text-black shadow-lg shadow-neon-green/50 transition-all duration-300 hover:scale-105 hover:from-neon-green hover:to-emerald-400 hover:shadow-neon-green/70"
                asChild
              >
                <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  {CTA_COPY.primary.text}
                </a>
              </Button>
              <p className="text-xs text-gray-400">⚡ {CTA_COPY.primary.microcopy}</p>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 px-8 py-6 text-lg transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              onClick={scrollToDemo}
            >
              <Play className="mr-2 h-5 w-5" />
              {CTA_COPY.secondary.text}
            </Button>
          </div>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge variant="neon" className="gap-1.5 px-3 py-1.5 text-sm">
              <Users className="h-3.5 w-3.5" />
              {SOCIAL_PROOF.users}
            </Badge>
            <Badge variant="cyan" className="gap-1.5 px-3 py-1.5 text-sm">
              <TrendingUp className="h-3.5 w-3.5" />
              {SOCIAL_PROOF.analyses}
            </Badge>
            <Badge variant="purple" className="gap-1.5 px-3 py-1.5 text-sm">
              ⭐ {SOCIAL_PROOF.rating}
            </Badge>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-foreground/50 text-xs uppercase tracking-wider">Scroll</span>
            <svg
              className="text-foreground/50 h-6 w-6"
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
      </div>
    </section>
  );
}


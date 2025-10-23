# 💻 LUFS Landing — Code Examples

## 📚 Готовые компоненты для копирования

---

## 1️⃣ Enhanced Hero Section

### Hero.tsx (Main Component)

```tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NeonText } from "@/components/ui/NeonText";
import { HeroBackground } from "./HeroBackground";
import { Send, Play } from "lucide-react";

export function Hero() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <HeroBackground />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Title with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">
            <span className="block">
              <NeonText color="green" glow>
                LUFS
              </NeonText>
            </span>
            <span className="mt-4 block bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-3xl text-transparent md:text-5xl lg:text-6xl">
              Music Analyzer
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl lg:text-2xl"
        >
          Professional Audio Analysis Powered by{" "}
          <span className="font-semibold text-neon-cyan">AI</span>
        </motion.p>

        {/* Stats Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="font-bold text-neon-green">90-97%</span> Accuracy
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="font-bold text-neon-purple">10-15s</span> Analysis
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="font-bold text-neon-cyan">1000+</span> Platforms
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="group relative bg-gradient-to-r from-neon-green to-emerald-500 px-8 py-6 text-lg font-semibold shadow-lg shadow-neon-green/50 transition-all duration-300 hover:scale-105 hover:from-neon-green hover:to-emerald-400 hover:shadow-neon-green/70"
            asChild
          >
            <a href="https://t.me/your_bot_name" target="_blank" rel="noopener noreferrer">
              <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              Open in Telegram
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white/20 px-8 py-6 text-lg transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            onClick={scrollToDemo}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-sm text-gray-400"
        >
          ⚡ Start analyzing in 30 seconds • 🔥 Trusted by 10,000+ users
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-wider text-gray-500">Scroll</span>
            <svg
              className="h-6 w-6 text-gray-500"
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
```

### HeroBackground.tsx (Particles/Grid)

```tsx
"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 15, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 136, 0.5)";
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ opacity: 0.3 }} />
  );
}
```

---

## 2️⃣ Stats Section with Counters

### Stats.tsx

```tsx
"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatsCounter } from "./StatsCounter";
import { Music, Key, Radio } from "lucide-react";

const stats = [
  {
    icon: Music,
    label: "BPM Detection",
    accuracy: 94,
    models: "5 AI Models",
    color: "green" as const,
    details: ["DeepRhythm", "Percival", "CREPE", "PESTO", "Harmony"],
  },
  {
    icon: Key,
    label: "Key Detection",
    accuracy: 93,
    models: "5 AI Models",
    color: "purple" as const,
    details: ["S-KEY", "Krumhansl", "Temperley", "KeyFinder", "PENN"],
  },
  {
    icon: Radio,
    label: "Hz Detection",
    accuracy: 96,
    models: "2 AI Models",
    color: "cyan" as const,
    details: ["CREPE", "PESTO"],
  },
];

export function Stats() {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Unmatched{" "}
            <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
              Accuracy
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Powered by multiple state-of-the-art AI models working in ensemble
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="group relative h-full overflow-hidden p-8">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-neon-${stat.color}/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`h-16 w-16 rounded-xl bg-neon-${stat.color}/10 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className={`h-8 w-8 text-neon-${stat.color}`} />
                    </div>

                    {/* Label */}
                    <h3 className="mb-2 text-xl font-semibold">{stat.label}</h3>

                    {/* Accuracy */}
                    <div className="mb-4">
                      <span className="text-5xl font-bold tabular-nums">
                        <StatsCounter end={stat.accuracy} suffix="%" />
                      </span>
                      <span className="ml-2 text-gray-400">accuracy</span>
                    </div>

                    {/* Models Badge */}
                    <div
                      className={`inline-block rounded-full px-3 py-1 bg-neon-${stat.color}/10 border border-neon-${stat.color}/20 mb-4`}
                    >
                      <span className={`text-sm text-neon-${stat.color}`}>{stat.models}</span>
                    </div>

                    {/* Details (shown on hover) */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      className="space-y-1 overflow-hidden text-sm text-gray-400"
                    >
                      {stat.details.map((model) => (
                        <div key={model} className="flex items-center gap-2">
                          <div className={`h-1.5 w-1.5 rounded-full bg-neon-${stat.color}`} />
                          {model}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block rounded-full border border-neon-green/20 bg-gradient-to-r from-neon-green/10 to-neon-cyan/10 px-6 py-3">
            <span className="font-semibold text-neon-green">15% more accurate</span>{" "}
            <span className="text-gray-400">than leading competitors</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

### StatsCounter.tsx

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";

interface StatsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export function StatsCounter({ end, duration = 2000, suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const entry = useIntersectionObserver(countRef, { threshold: 0.5 });
  const isVisible = !!entry?.isIntersecting;
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function (easeOutExpo)
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentCount = Math.floor(eased * end);
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration, hasAnimated]);

  return (
    <span ref={countRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
```

---

## 3️⃣ Interactive Live Demo

### LiveDemo.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Loader2 } from "lucide-react";

const DEMO_DURATION = 15000; // 15 seconds

export function LiveDemo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"idle" | "uploading" | "analyzing" | "done">("idle");
  const [results, setResults] = useState({
    bpm: 0,
    key: "—",
    hz: 0,
  });

  const startDemo = () => {
    setIsAnalyzing(true);
    setProgress(0);
    setPhase("uploading");
    setResults({ bpm: 0, key: "—", hz: 0 });

    // Simulate analysis
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / DEMO_DURATION) * 100, 100);
      setProgress(newProgress);

      // Phase transitions
      if (newProgress > 30 && phase === "uploading") {
        setPhase("analyzing");
      }

      // Gradually update results
      if (newProgress > 50) {
        setResults({
          bpm: Math.min(128.5, (newProgress / 100) * 128.5),
          key: newProgress > 70 ? "A minor" : "—",
          hz: Math.min(5.3, ((newProgress - 50) / 50) * 5.3),
        });
      }

      // Complete
      if (newProgress >= 100) {
        clearInterval(interval);
        setPhase("done");
        setIsAnalyzing(false);
        setResults({
          bpm: 128.5,
          key: "A minor",
          hz: 5.3,
        });
      }
    }, 50);
  };

  return (
    <section id="demo" className="px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            See it in{" "}
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-lg text-gray-400">Watch a simulated analysis in real-time</p>
        </motion.div>

        <GlassCard className="p-8">
          {/* Track Info */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink">
                <Play className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Sample Track.mp3</h3>
                <p className="text-sm text-gray-400">Electronic • 3:45</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-green to-neon-cyan"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Status */}
            <motion.p
              key={phase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-gray-400"
            >
              {phase === "idle" && "Ready to analyze"}
              {phase === "uploading" && (
                <>
                  <Loader2 className="mr-2 inline h-4 w-4 animate-spin" />
                  Uploading track...
                </>
              )}
              {phase === "analyzing" && (
                <>
                  <Loader2 className="mr-2 inline h-4 w-4 animate-spin" />
                  Analyzing with AI models...
                </>
              )}
              {phase === "done" && (
                <>
                  <CheckCircle className="mr-2 inline h-4 w-4 text-neon-green" />
                  Analysis complete!
                </>
              )}
            </motion.p>
          </div>

          {/* Results Grid */}
          <div className="mb-8 grid grid-cols-3 gap-4">
            {/* BPM */}
            <div className="rounded-lg bg-white/5 p-4 text-center">
              <p className="mb-2 text-sm text-gray-400">BPM</p>
              <motion.p
                className="text-3xl font-bold tabular-nums"
                animate={{ scale: isAnalyzing ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5, repeat: isAnalyzing ? Infinity : 0 }}
              >
                {results.bpm.toFixed(1)}
              </motion.p>
            </div>

            {/* Key */}
            <div className="rounded-lg bg-white/5 p-4 text-center">
              <p className="mb-2 text-sm text-gray-400">Key</p>
              <motion.p
                className="text-3xl font-bold"
                animate={{ scale: isAnalyzing ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5, repeat: isAnalyzing ? Infinity : 0, delay: 0.1 }}
              >
                {results.key}
              </motion.p>
            </div>

            {/* Hz */}
            <div className="rounded-lg bg-white/5 p-4 text-center">
              <p className="mb-2 text-sm text-gray-400">Hz</p>
              <motion.p
                className="text-3xl font-bold tabular-nums"
                animate={{ scale: isAnalyzing ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5, repeat: isAnalyzing ? Infinity : 0, delay: 0.2 }}
              >
                {results.hz > 0 ? `+${results.hz.toFixed(1)}` : "—"}
              </motion.p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            {phase !== "done" ? (
              <Button
                size="lg"
                onClick={startDemo}
                disabled={isAnalyzing}
                className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-purple/90 hover:to-neon-pink/90 disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    Start Demo Analysis
                  </>
                )}
              </Button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-neon-green to-emerald-500 hover:from-neon-green/90 hover:to-emerald-500/90"
                  asChild
                >
                  <a href="https://t.me/your_bot_name" target="_blank" rel="noopener noreferrer">
                    Try it Yourself in Telegram
                  </a>
                </Button>
                <button
                  onClick={startDemo}
                  className="mx-auto block text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Run Demo Again
                </button>
              </motion.div>
            )}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
```

---

## 4️⃣ FAQ Section with Accordion

### FAQ.tsx

```tsx
"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How accurate is the BPM detection?",
    answer:
      "Our BPM detection achieves 90-94% accuracy using an ensemble of 5 state-of-the-art AI models including DeepRhythm, Percival, CREPE, PESTO, and Harmony. This multi-model approach ensures consistent and reliable results across various music genres.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "We support 1000+ platforms including YouTube, SoundCloud, TikTok, Instagram, Beatstars, Traktrain, Spotify, Apple Music, and many more. Simply paste any music link and our bot will handle the rest!",
  },
  {
    question: "How long does analysis take?",
    answer:
      "Most tracks are analyzed in 10-15 seconds on average. The exact time may vary slightly depending on the track length and server load, but we guarantee results within 30 seconds.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account needed! Simply open our Telegram bot and start analyzing immediately. Your privacy is important to us - we don't store any personal data or music files.",
  },
  {
    question: "What's included in the free tier?",
    answer:
      "The free tier includes 3 full analyses per week with access to BPM, Key, and Hz detection. Perfect for casual users who want to try out our AI-powered analysis.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes! You can cancel your subscription instantly at any time through Telegram. No questions asked, no hidden fees. You'll retain access until the end of your billing period.",
  },
  {
    question: "Is my music data safe?",
    answer:
      "Absolutely. We analyze your music in real-time and immediately delete all files after processing. We never store your music or share it with third parties. Your privacy and security are our top priorities.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We support all major audio formats including MP3, WAV, FLAC, OGG, M4A, AAC, and more. If you can play it, we can analyze it!",
  },
];

export function FAQ() {
  return (
    <section className="bg-gradient-to-b from-transparent to-dark-lighter px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about LUFS Music Analyzer
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-white/10 bg-white/5 px-6 backdrop-blur-sm transition-colors data-[state=open]:bg-white/10"
              >
                <AccordionTrigger className="py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-gray-400">Have more questions?</p>
          <Button
            size="lg"
            variant="outline"
            className="border-neon-cyan/20 hover:border-neon-cyan/40 hover:bg-neon-cyan/10"
            asChild
          >
            <a href="https://t.me/your_bot_name" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask in Telegram
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## 5️⃣ Utility Hooks

### useIntersectionObserver.ts

```tsx
import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
): IntersectionObserverEntry | null {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, options]);

  return entry;
}
```

### useMediaQuery.ts

```tsx
import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
}

// Usage examples:
// const isMobile = useMediaQuery("(max-width: 768px)");
// const isDark = useMediaQuery("(prefers-color-scheme: dark)");
// const isReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
```

---

## 6️⃣ Utility Functions

### cn.ts (clsx + tailwind-merge)

```tsx
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### constants.ts

```tsx
export const TELEGRAM_BOT_URL = "https://t.me/your_bot_name";

export const COLORS = {
  neonGreen: "#00ff88",
  neonPurple: "#ff00ff",
  neonCyan: "#00d4ff",
  neonPink: "#ff0080",
  dark: "#0a0a0f",
  darkLighter: "#1a1a2e",
} as const;

export const STATS = {
  bpm: { accuracy: 94, models: 5 },
  key: { accuracy: 93, models: 5 },
  hz: { accuracy: 96, models: 2 },
} as const;

export const PRICING = {
  free: {
    name: "Free",
    price: 0,
    analyses: "3/week",
    features: ["BPM Detection", "Key Detection", "Hz Detection"],
  },
  monthly: {
    name: "Monthly",
    price: 3.99,
    analyses: "Unlimited",
    features: ["Everything in Free", "Priority Processing", "Detailed Reports", "API Access"],
  },
  yearly: {
    name: "Yearly",
    price: 24.99,
    analyses: "Unlimited",
    savings: 48,
    features: [
      "Everything in Monthly",
      "Advanced Analytics",
      "Custom Integrations",
      "24/7 Priority Support",
    ],
  },
} as const;
```

---

## 📝 Notes

- Все компоненты используют `"use client"` directive для client-side interactivity
- Используйте `framer-motion` для всех анимаций
- Всегда типизируйте props с TypeScript
- Используйте `cn()` utility для условных классов
- Следуйте accessibility best practices (ARIA labels, keyboard navigation)
- Тестируйте на mobile (375px) и desktop (1920px)

---

**🎉 Happy Coding!**

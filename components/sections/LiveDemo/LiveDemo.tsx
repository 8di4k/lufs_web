"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Upload,
  Music,
  Zap,
  CheckCircle2,
  Play,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

type DemoStage = "idle" | "uploading" | "analyzing-bpm" | "detecting-key" | "complete";

interface AnalysisResult {
  bpm: string;
  key: string | React.ReactElement;
  hz: string;
}

const stages = [
  { id: "uploading", label: "Uploading track...", icon: Upload, progress: 25 },
  { id: "analyzing-bpm", label: "Analyzing BPM...", icon: Zap, progress: 50 },
  { id: "detecting-key", label: "Detecting Key & Hz...", icon: Music, progress: 75 },
  { id: "complete", label: "Analysis complete!", icon: CheckCircle2, progress: 100 },
];

// Musical keys with their relative keys
const musicalKeys = [
  { main: "C major", relative: "A minor" },
  { main: "G major", relative: "E minor" },
  { main: "D major", relative: "B minor" },
  { main: "A major", relative: "F♯ minor" },
  { main: "E major", relative: "C♯ minor" },
  { main: "B major", relative: "G♯ minor" },
  { main: "F♯ major", relative: "D♯ minor" },
  { main: "D♭ major", relative: "B♭ minor" },
  { main: "A♭ major", relative: "F minor" },
  { main: "E♭ major", relative: "C minor" },
  { main: "B♭ major", relative: "G minor" },
  { main: "F major", relative: "D minor" },
  { main: "A minor", relative: "C major" },
  { main: "E minor", relative: "G major" },
  { main: "B minor", relative: "D major" },
  { main: "F♯ minor", relative: "A major" },
  { main: "C♯ minor", relative: "E major" },
  { main: "G♯ minor", relative: "B major" },
  { main: "D♯ minor", relative: "F♯ major" },
  { main: "B♭ minor", relative: "D♭ major" },
  { main: "F minor", relative: "A♭ major" },
  { main: "C minor", relative: "E♭ major" },
  { main: "G minor", relative: "B♭ major" },
  { main: "D minor", relative: "F major" },
];

// Common reference frequencies (A4)
const referenceFrequencies = [432, 440, 442, 444, 445, 415, 438, 443];

function getRandomBPM(): string {
  const bpm = Math.floor(Math.random() * (190 - 70 + 1)) + 70;
  const decimal = Math.floor(Math.random() * 10);
  return `${bpm}.${decimal}`;
}

function getRandomKey(): React.ReactElement {
  const keyPair = musicalKeys[Math.floor(Math.random() * musicalKeys.length)];
  return (
    <>
      {keyPair.main} <span className="text-sm italic text-zinc-400">({keyPair.relative})</span>
    </>
  );
}

function getRandomHz(): string {
  return referenceFrequencies[
    Math.floor(Math.random() * referenceFrequencies.length)
  ].toString();
}

export function LiveDemo() {
  const [currentStage, setCurrentStage] = useState<DemoStage>("idle");
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<AnalysisResult | null>(null);

  const startDemo = () => {
    setCurrentStage("uploading");
    setProgress(0);
    setResults(null);
  };

  useEffect(() => {
    if (currentStage === "idle") return;

    const stageIndex = stages.findIndex((s) => s.id === currentStage);
    if (stageIndex === -1) return;

    const startProgress = progress;
    const targetProgress = stages[stageIndex].progress;
    const duration = 3500; // 3.5 seconds per stage
    const steps = 50;
    const increment = (targetProgress - startProgress) / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setProgress((prev) => Math.min(prev + increment, targetProgress));

      if (currentStep >= steps) {
        clearInterval(interval);
        
        // Move to next stage
        if (currentStage === "uploading") {
          setTimeout(() => setCurrentStage("analyzing-bpm"), 300);
        } else if (currentStage === "analyzing-bpm") {
          setTimeout(() => setCurrentStage("detecting-key"), 300);
        } else if (currentStage === "detecting-key") {
          setTimeout(() => {
            setCurrentStage("complete");
            setResults({
              bpm: getRandomBPM(),
              key: getRandomKey(),
              hz: getRandomHz(),
            });
          }, 300);
        }
      }
    }, stepDuration);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStage]);

  const resetDemo = () => {
    setCurrentStage("idle");
    setProgress(0);
    setResults(null);
  };

  return (
    <section id="demo" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            🎵 Try It Out
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-linear-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              See It In Action
            </span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Watch how fast and accurate our analysis engine works.
            This is a demo preview of the actual bot experience.
          </p>
        </motion.div>

        {/* Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="relative overflow-hidden bg-linear-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800/50 p-8">
            {/* Idle State */}
            <AnimatePresence mode="wait">
              {currentStage === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-500/10 border-2 border-cyan-500/20">
                    <Play className="w-10 h-10 text-cyan-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Ready to Analyze
                    </h3>
                    <p className="text-zinc-400">
                      Click below to see a live demo of music analysis
                    </p>
                  </div>

                  <Button
                    size="lg"
                    onClick={startDemo}
                    className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-8"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Demo Analysis
                  </Button>

                  {/* Fake Drag & Drop Zone */}
                  <div className="mt-8 p-8 border-2 border-dashed border-zinc-700 rounded-lg hover:border-cyan-500/50 transition-colors cursor-not-allowed opacity-50">
                    <Upload className="w-8 h-8 mx-auto mb-3 text-zinc-500" />
                    <p className="text-sm text-zinc-500">
                      Drag & drop preview (coming soon in bot)
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Analysis in Progress */}
              {currentStage !== "idle" && currentStage !== "complete" && (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {/* Current Stage */}
                  <div className="text-center space-y-4">
                    {stages.map((stage) => {
                      const Icon = stage.icon;
                      const isActive = stage.id === currentStage;
                      const isPast = stages.findIndex((s) => s.id === currentStage) > stages.findIndex((s) => s.id === stage.id);
                      
                      return (
                        <motion.div
                          key={stage.id}
                          className={cn(
                            "flex items-center justify-center gap-3 text-lg font-medium transition-all duration-300",
                            isActive && "text-cyan-400 scale-110",
                            isPast && "text-green-400 opacity-50",
                            !isActive && !isPast && "text-zinc-600 opacity-30"
                          )}
                          animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                          transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
                        >
                          <Icon className="w-6 h-6" />
                          <span>{stage.label}</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-400">Progress</span>
                      <span className="text-cyan-400 font-semibold">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    
                    <div className="relative h-3 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-linear-to-r from-cyan-500 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Animated glow */}
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                        style={{ width: "20%" }}
                        animate={{
                          left: ["0%", "100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                  </div>

                  <p className="text-center text-sm text-zinc-500">
                    Analyzing with 5 AI models simultaneously...
                  </p>
                </motion.div>
              )}

              {/* Results */}
              {currentStage === "complete" && results && (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Success Header */}
                  <div className="text-center space-y-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500/20"
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white">
                      Analysis Complete!
                    </h3>
                    <p className="text-zinc-400">
                      Results ready in 10.5 seconds
                    </p>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(results).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-cyan-500/30 transition-colors"
                      >
                        <p className="text-xs uppercase text-zinc-500 mb-1 font-semibold">
                          {key === "bpm" ? "BPM" : key === "key" ? "Key" : "Hz"}
                        </p>
                        <p className="text-xl font-bold text-white">
                          {value}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      onClick={resetDemo}
                      variant="outline"
                      size="lg"
                      className="flex-1"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Analyze Another Track
                    </Button>
                    
                    <Button
                      size="lg"
                      className="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold"
                      onClick={() => window.open("https://t.me/your_bot", "_blank")}
                    >
                      Try Real Bot
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Card Glow Effect */}
            <div className="absolute inset-0 opacity-50 blur-2xl pointer-events-none">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full" />
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full" />
            </div>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-sm text-zinc-500"
        >
          💡 This is a preview. The real bot analyzes your actual tracks instantly via Telegram.
        </motion.p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
    </section>
  );
}


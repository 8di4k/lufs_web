"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import {
  Zap,
  Globe,
  Target,
  DollarSign,
  Music,
  UserCheck,
} from "lucide-react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multi-Platform Support",
    description:
      "Upload from 1000+ platforms including YouTube, SoundCloud, Spotify, Apple Music, TikTok, and more. Just paste the link.",
    stats: "1000+ Platforms",
    previewImage: "/images/preview-platforms.jpg", // placeholder
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description:
      "Get comprehensive analysis in just 10-15 seconds. No waiting, no queues. Instant results powered by optimized AI models.",
    stats: "10-15s Analysis",
    previewImage: "/images/preview-speed.jpg", // placeholder
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "AI-Powered Accuracy",
    description:
      "12 AI models working together for 90-97% accuracy in BPM, key, and Hz detection. Core engines: DeepRhythm, Essentia, Librosa, S-KEY. Industry-leading precision.",
    stats: "90-97% Accuracy",
    previewImage: "/images/preview-accuracy.jpg", // placeholder
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Best Pricing",
    description:
      "Start free with 3 analyses per week. Upgrade to unlimited for just $3.99/month or $24.99/year. No hidden fees.",
    stats: "From $3.99/mo",
    previewImage: "/images/preview-pricing.jpg", // placeholder
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Complete Music Analysis",
    description:
      "BPM detection, musical key identification, Hz tuning analysis, and more. Everything you need in one comprehensive report.",
    stats: "5+ Metrics",
    previewImage: "/images/preview-analysis.jpg", // placeholder
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "No Registration Needed",
    description:
      "Start analyzing immediately via Telegram. No sign-up forms, no email verification, no hassle. Just pure convenience.",
    stats: "Instant Access",
    previewImage: "/images/preview-telegram.jpg", // placeholder
  },
];

export function Features() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <motion.span
            className="inline-block px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            ⚡ Powerful Features
          </motion.span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
            <span className="bg-linear-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto px-4">
            Professional-grade music analysis tools at your fingertips.
            Fast, accurate, and incredibly easy to use.
          </p>
        </motion.div>

        {/* Desktop & Tablet: Grid Layout */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        )}

        {/* Mobile: Tabs Layout */}
        {isMobile && (
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="w-full grid grid-cols-3 h-auto gap-1.5 bg-zinc-900/50 p-1.5 rounded-lg">
              {features.map((feature, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 flex flex-col items-center gap-1 py-2.5 rounded-md transition-all"
                >
                  <span className="text-base">{feature.icon}</span>
                  <span className="text-[10px] font-medium leading-tight text-center">
                    {feature.title.split(" ")[0]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-4">
              {features.map((feature, index) => (
                <TabsContent key={index} value={index.toString()} className="mt-0">
                  <FeatureCard {...feature} index={0} />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        )}
      </div>
    </section>
  );
}


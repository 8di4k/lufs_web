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
      "5 advanced AI models working together for 90-97% accuracy in BPM, key, and Hz detection. Industry-leading precision.",
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ⚡ Powerful Features
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="bg-linear-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Professional-grade music analysis tools at your fingertips.
            Fast, accurate, and incredibly easy to use.
          </p>
        </motion.div>

        {/* Desktop: Grid Layout */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        )}

        {/* Mobile: Tabs Layout */}
        {isMobile && (
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="w-full grid grid-cols-3 h-auto gap-2 bg-zinc-900/50 p-2">
              {features.map((feature, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 flex flex-col items-center gap-1 py-3"
                >
                  <span className="text-lg">{feature.icon}</span>
                  <span className="text-xs font-medium leading-tight text-center">
                    {feature.title.split(" ")[0]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-6">
              {features.map((feature, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <FeatureCard {...feature} index={0} />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    </section>
  );
}


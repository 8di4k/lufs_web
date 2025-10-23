"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type ComparisonStatus = "check" | "warning" | "cross";

interface ComparisonFeature {
  feature: string;
  us: { status: ComparisonStatus; label: string };
  competitorA: { status: ComparisonStatus; label: string };
  competitorB: { status: ComparisonStatus; label: string };
}

const features: ComparisonFeature[] = [
  {
    feature: "BPM Accuracy",
    us: { status: "check", label: "94%" },
    competitorA: { status: "warning", label: "85%" },
    competitorB: { status: "warning", label: "88%" },
  },
  {
    feature: "Analysis Speed",
    us: { status: "check", label: "10-15s" },
    competitorA: { status: "cross", label: "30-60s" },
    competitorB: { status: "cross", label: "45s" },
  },
  {
    feature: "Platform Support",
    us: { status: "check", label: "1000+" },
    competitorA: { status: "warning", label: "50" },
    competitorB: { status: "warning", label: "100" },
  },
  {
    feature: "Pricing",
    us: { status: "check", label: "$3.99/mo" },
    competitorA: { status: "cross", label: "$9.99/mo" },
    competitorB: { status: "cross", label: "$7.99/mo" },
  },
  {
    feature: "No Signup Required",
    us: { status: "check", label: "Yes" },
    competitorA: { status: "cross", label: "Required" },
    competitorB: { status: "warning", label: "Limited" },
  },
  {
    feature: "Key Detection",
    us: { status: "check", label: "Yes" },
    competitorA: { status: "check", label: "Yes" },
    competitorB: { status: "warning", label: "Basic" },
  },
  {
    feature: "Hz Tuning Analysis",
    us: { status: "check", label: "Yes" },
    competitorA: { status: "cross", label: "No" },
    competitorB: { status: "cross", label: "No" },
  },
];

function StatusIcon({
  status,
  animated = false,
}: {
  status: ComparisonStatus;
  animated?: boolean;
}) {
  const Icon =
    status === "check"
      ? CheckCircle2
      : status === "warning"
      ? AlertCircle
      : XCircle;

  const colorClass =
    status === "check"
      ? "text-green-400"
      : status === "warning"
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <motion.div
      initial={animated ? { scale: 0, rotate: -180 } : {}}
      whileInView={animated ? { scale: 1, rotate: 0 } : {}}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <Icon className={cn("w-5 h-5", colorClass)} />
    </motion.div>
  );
}

export function Comparison() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="relative z-10 max-w-6xl mx-auto">
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
            🔥 Why We're Better
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-linear-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Better Than The Rest
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            See how we stack up against the competition. We lead in speed,
            accuracy, and value.
          </p>
        </motion.div>

        {/* Desktop: Table Layout */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-visible rounded-xl border border-zinc-800/50"
          >
            <div className="grid grid-cols-4 bg-zinc-900/50">
              {/* Header */}
              <div className="p-6 border-b border-r border-zinc-800/50">
                <h3 className="text-sm font-semibold text-zinc-400 uppercase">
                  Feature
                </h3>
              </div>
              
              <div className="relative pt-10 px-6 pb-6 border-b border-r border-cyan-500/30 bg-linear-to-br from-cyan-500/5 to-blue-500/5">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white border-none z-10">
                  ⭐ Our Solution
                </Badge>
                <h3 className="text-sm font-semibold text-cyan-400 uppercase text-center">
                  LUFS Analyzer
                </h3>
              </div>
              
              <div className="p-6 border-b border-r border-zinc-800/50">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase text-center">
                  Competitor A
                </h3>
              </div>
              
              <div className="p-6 border-b border-zinc-800/50">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase text-center">
                  Competitor B
                </h3>
              </div>

              {/* Rows */}
              {features.map((feature, index) => (
                <motion.div
                  key={feature.feature}
                  className="contents"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {/* Feature Name */}
                  <div className="p-6 border-r border-zinc-800/50 font-medium text-white">
                    {feature.feature}
                  </div>

                  {/* Our Value (Highlighted) */}
                  <div className="relative p-6 border-r border-cyan-500/30 bg-linear-to-br from-cyan-500/5 to-blue-500/5">
                    <div className="flex items-center justify-center gap-3">
                      <StatusIcon status={feature.us.status} animated />
                      <span className="font-semibold text-cyan-100">
                        {feature.us.label}
                      </span>
                    </div>
                  </div>

                  {/* Competitor A */}
                  <div className="p-6 border-r border-zinc-800/50">
                    <div className="flex items-center justify-center gap-3">
                      <StatusIcon status={feature.competitorA.status} />
                      <span className="text-zinc-400">
                        {feature.competitorA.label}
                      </span>
                    </div>
                  </div>

                  {/* Competitor B */}
                  <div className="p-6 border-zinc-800/50">
                    <div className="flex items-center justify-center gap-3">
                      <StatusIcon status={feature.competitorB.status} />
                      <span className="text-zinc-400">
                        {feature.competitorB.label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Glow Effect on Highlighted Column */}
            <div className="absolute inset-y-0 left-1/4 w-1/4 bg-cyan-500/5 blur-xl pointer-events-none" />
          </motion.div>
        )}

        {/* Mobile: Tabs Layout */}
        {isMobile && (
          <Tabs defaultValue="us" className="w-full">
            <TabsList className="w-full grid grid-cols-3 h-auto gap-2 bg-zinc-900/50 p-2">
              <TabsTrigger
                value="us"
                className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 py-3"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="font-semibold text-sm">Us</span>
                  <Badge className="bg-cyan-500 text-white text-xs px-1 py-0 border-none">
                    ⭐
                  </Badge>
                </div>
              </TabsTrigger>
              
              <TabsTrigger
                value="competitorA"
                className="data-[state=active]:bg-zinc-700 py-3"
              >
                <span className="text-sm">Competitor A</span>
              </TabsTrigger>
              
              <TabsTrigger
                value="competitorB"
                className="data-[state=active]:bg-zinc-700 py-3"
              >
                <span className="text-sm">Competitor B</span>
              </TabsTrigger>
            </TabsList>

            {/* Us */}
            <TabsContent value="us" className="mt-6">
              <Card className="bg-linear-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/30 p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">
                  LUFS Analyzer
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                    >
                      <span className="font-medium text-white">
                        {feature.feature}
                      </span>
                      <div className="flex items-center gap-2">
                        <StatusIcon status={feature.us.status} />
                        <span className="font-semibold text-cyan-100">
                          {feature.us.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Competitor A */}
            <TabsContent value="competitorA" className="mt-6">
              <Card className="bg-zinc-900/50 border border-zinc-800/50 p-6">
                <h3 className="text-xl font-bold text-zinc-300 mb-6 text-center">
                  Competitor A
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-zinc-800/50"
                    >
                      <span className="text-zinc-400">{feature.feature}</span>
                      <div className="flex items-center gap-2">
                        <StatusIcon status={feature.competitorA.status} />
                        <span className="text-zinc-400">
                          {feature.competitorA.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Competitor B */}
            <TabsContent value="competitorB" className="mt-6">
              <Card className="bg-zinc-900/50 border border-zinc-800/50 p-6">
                <h3 className="text-xl font-bold text-zinc-300 mb-6 text-center">
                  Competitor B
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-zinc-800/50"
                    >
                      <span className="text-zinc-400">{feature.feature}</span>
                      <div className="flex items-center gap-2">
                        <StatusIcon status={feature.competitorB.status} />
                        <span className="text-zinc-400">
                          {feature.competitorB.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-sm text-zinc-500"
        >
          * Comparison based on publicly available data and testing as of October 2025
        </motion.p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    </section>
  );
}


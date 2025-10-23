"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, TrendingUp, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { TELEGRAM_BOT_URL } from "@/lib/constants/cta";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  badge?: string;
  badgeIcon?: React.ReactNode;
  highlighted?: boolean;
  savings?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect to try",
    features: [
      "3 analyses per week",
      "BPM detection (90-94% accuracy)",
      "Musical key identification",
      "Hz tuning analysis",
      "Energy & tempo classification",
      "All 1000+ platforms supported",
    ],
    buttonText: "Start Free",
    buttonVariant: "outline",
  },
  {
    name: "Monthly",
    price: "$3.99",
    period: "per month",
    description: "Most Flexible",
    features: [
      "Unlimited analyses",
      "BPM detection (90-94% accuracy)",
      "Musical key identification",
      "Hz tuning analysis",
      "Energy & tempo classification",
      "All 1000+ platforms supported",
      "Priority processing",
      "Cancel anytime",
    ],
    buttonText: "Upgrade Now",
    buttonVariant: "default",
    badge: "Most Popular",
    badgeIcon: <TrendingUp className="w-3 h-3" />,
  },
  {
    name: "Yearly",
    price: "$24.99",
    period: "per year",
    description: "Best Value",
    features: [
      "Unlimited analyses",
      "BPM detection (90-94% accuracy)",
      "Musical key identification",
      "Hz tuning analysis",
      "Energy & tempo classification",
      "All 1000+ platforms supported",
      "Priority processing",
      "Cancel anytime",
      "Early access to new features",
    ],
    buttonText: "Get Best Value",
    buttonVariant: "default",
    badge: "BEST VALUE",
    badgeIcon: <Crown className="w-3 h-3" />,
    highlighted: true,
    savings: "Save $23.89/year",
  },
];

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative",
        plan.highlighted && "md:-mt-4 md:mb-4"
      )}
    >
      <Card
        className={cn(
          "relative h-full overflow-visible p-8",
          plan.badge ? "pt-10" : "pt-8",
          "bg-linear-to-br from-zinc-900 via-zinc-900 to-zinc-950",
          "border transition-all duration-500",
          plan.highlighted
            ? "border-cyan-500/50 shadow-xl shadow-cyan-500/20 scale-105"
            : "border-zinc-800/50 hover:border-zinc-700"
        )}
      >
        {/* Badge */}
        {plan.badge && (
          <Badge
            className={cn(
              "absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 border-none z-10",
              plan.highlighted
                ? "bg-linear-to-r from-cyan-500 to-blue-500 text-white"
                : "bg-zinc-700 text-zinc-200"
            )}
          >
            <span className="flex items-center gap-1">
              {plan.badgeIcon}
              {plan.badge}
            </span>
          </Badge>
        )}

        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h3 className="text-2xl font-bold text-white">
            {plan.name}
          </h3>
          
          <div className="space-y-1">
            <div className="flex items-baseline justify-center gap-1">
              <span
                className={cn(
                  "text-5xl font-bold",
                  plan.highlighted
                    ? "bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    : "text-white"
                )}
              >
                {plan.price}
              </span>
              <span className="text-zinc-500 text-sm">
                /{plan.period}
              </span>
            </div>

            {plan.savings && (
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.3 }}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20"
              >
                <Zap className="w-3 h-3 text-green-400" />
                <span className="text-xs font-semibold text-green-400">
                  {plan.savings}
                </span>
              </motion.div>
            )}
          </div>

          <p className="text-sm text-zinc-400 font-medium">
            {plan.description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
              className="flex items-start gap-3 text-sm"
            >
              <Check
                className={cn(
                  "w-5 h-5 shrink-0 mt-0.5",
                  plan.highlighted ? "text-cyan-400" : "text-zinc-500"
                )}
              />
              <span className="text-zinc-300 leading-relaxed">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Button */}
        <Button
          size="lg"
          variant={plan.buttonVariant}
          className={cn(
            "w-full font-semibold",
            plan.highlighted &&
              "bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-none"
          )}
          onClick={() => window.open(TELEGRAM_BOT_URL, "_blank")}
        >
          {plan.buttonText}
        </Button>

        {/* Glow Effect */}
        {plan.highlighted && (
          <motion.div
            className="absolute inset-0 opacity-50 blur-2xl pointer-events-none"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-cyan-500/30 via-transparent to-transparent" />
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />
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
            💎 Simple Pricing
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-linear-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Start free, upgrade when you need more.
            All plans include full feature access.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile: Horizontal scroll */}
          <div className="md:grid md:grid-cols-3 gap-8 flex md:flex-none overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 pb-2">
            {plans.map((plan, index) => (
              <div key={index} className="min-w-[85vw] sm:min-w-[70vw] md:min-w-0 snap-center">
                <PricingCard plan={plan} index={index} />
              </div>
            ))}
          </div>
          
          {/* Scroll indicators for mobile */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {plans.map((_, i) => (
              <div 
                key={i} 
                className="h-2 w-2 rounded-full bg-zinc-700 transition-colors"
              />
            ))}
          </div>
        </div>

        {/* Money-back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">
              30-day money-back guarantee
            </span>
          </div>

          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Not satisfied? Get a full refund within 30 days, no questions asked.
            We're confident you'll love our service.
          </p>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-sm text-zinc-500"
        >
          All prices in USD. Taxes may apply. Cancel anytime.
        </motion.p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    </section>
  );
}


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, TrendingUp, Crown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { TELEGRAM_BOT_URL } from "@/lib/constants/cta";

interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
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

const freePlan: PricingPlan = {
  name: "Free",
  price: "$0",
  period: "forever",
  description: "Perfect to try our service",
  features: [
    "3 analyses per week",
    "BPM detection (90-94% accuracy)",
    "Musical key identification",
    "Hz tuning analysis",
    "All 1000+ platforms supported",
  ],
  buttonText: "Start Free",
  buttonVariant: "outline",
};

const monthlyPlans: PricingPlan[] = [
  {
    name: "Pro",
    price: "$3.99",
    period: "month",
    description: "Most Flexible",
    features: [
      "Unlimited analyses",
      "BPM detection (90-94% accuracy)",
      "Musical key identification",
      "Hz tuning analysis",
      "All 1000+ platforms supported",
      "Priority processing",
      "Cancel anytime",
    ],
    buttonText: "Get Started",
    buttonVariant: "default",
    badge: "Most Popular",
    badgeIcon: <TrendingUp className="w-3 h-3" />,
    highlighted: true,
  },
];

const yearlyPlans: PricingPlan[] = [
  {
    name: "Pro",
    price: "$24.99",
    originalPrice: "$47.88",
    period: "year",
    description: "Best Value — Save 48%",
    features: [
      "Unlimited analyses",
      "BPM detection (90-94% accuracy)",
      "Musical key identification",
      "Hz tuning analysis",
      "All 1000+ platforms supported",
      "Priority processing",
      "Cancel anytime",
      "Early access to new features",
    ],
    buttonText: "Save 48% Now",
    buttonVariant: "default",
    badge: "BEST VALUE",
    badgeIcon: <Crown className="w-3 h-3" />,
    highlighted: true,
    savings: "Save $22.89/year",
  },
];

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative h-full",
        plan.highlighted && "md:-mt-4",
        plan.badge && "pt-4"
      )}
    >
      {/* Badge - outside card to prevent clipping */}
      {plan.badge && (
        <Badge
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1.5 border-none z-20 shadow-lg",
            plan.highlighted
              ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white animate-shimmer bg-[length:200%_100%]"
              : "bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-100"
          )}
        >
          <span className="flex items-center gap-1.5">
            {plan.badgeIcon}
            {plan.badge}
          </span>
        </Badge>
      )}

      <Card
        className={cn(
          "relative h-full overflow-hidden p-6 sm:p-8",
          plan.badge ? "pt-10 sm:pt-12" : "pt-6 sm:pt-8",
          "bg-gradient-to-br from-zinc-900/90 via-zinc-900/80 to-zinc-950/90",
          "backdrop-blur-xl border transition-all duration-500",
          "hover:scale-[1.02] group",
          plan.highlighted
            ? "border-cyan-500/50 shadow-xl shadow-cyan-500/20 md:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
            : "border-zinc-800/50 hover:border-zinc-700/70"
        )}
      >

        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {plan.name}
          </h3>
          
          <div className="space-y-2">
            <div className="flex items-baseline justify-center gap-1">
              <span
                className={cn(
                  "text-4xl sm:text-5xl font-bold transition-all duration-300",
                  plan.highlighted
                    ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
                    : "text-white"
                )}
              >
                {plan.price}
              </span>
              <span className="text-zinc-500 text-sm font-medium">
                /{plan.period}
              </span>
            </div>

            {plan.originalPrice && (
              <div className="flex items-center justify-center gap-2">
                <span className="text-zinc-500 text-sm line-through">
                  {plan.originalPrice}
                </span>
              </div>
            )}

            {plan.savings && (
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
              >
                <Zap className="w-3.5 h-3.5 text-green-400" />
                <span className="text-xs font-bold text-green-400">
                  {plan.savings}
                </span>
              </motion.div>
            )}
          </div>

          <p className="text-sm sm:text-base text-zinc-400 font-medium">
            {plan.description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-grow">
          {plan.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
              className="flex items-start gap-3 text-sm"
            >
              <div className={cn(
                "shrink-0 mt-0.5 rounded-full p-0.5",
                plan.highlighted 
                  ? "bg-gradient-to-br from-cyan-500 to-blue-500" 
                  : "bg-zinc-700"
              )}>
                <Check className="w-4 h-4 text-white" />
              </div>
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
            "w-full font-semibold text-base transition-all duration-300 group-hover:scale-105",
            plan.highlighted
              ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 hover:from-cyan-500 hover:via-blue-500 hover:to-cyan-500 text-white border-none shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 animate-shimmer bg-[length:200%_100%]"
              : "border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600"
          )}
          onClick={() => window.open(TELEGRAM_BOT_URL, "_blank")}
        >
          {plan.buttonText}
        </Button>

        {/* Glow Effect */}
        {plan.highlighted && (
          <>
            <motion.div
              className="absolute inset-0 opacity-40 blur-3xl pointer-events-none -z-10"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-cyan-500/40 via-blue-500/20 to-transparent" />
            </motion.div>
            
            {/* Border glow animation */}
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-20 blur-xl animate-shimmer bg-[length:200%_100%]" />
            </div>
          </>
        )}
      </Card>
    </motion.div>
  );
}

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const paidPlans = billingCycle === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <section id="pricing" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-6"
        >
          <motion.span
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Simple & Transparent Pricing
          </motion.span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-2">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4">
            Start free, upgrade when you need more.
            <br className="hidden sm:block" />
            All plans include full feature access.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 p-1 sm:p-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl w-full max-w-sm sm:w-auto">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "relative flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300",
                billingCycle === "monthly"
                  ? "text-white bg-zinc-800 shadow-lg"
                  : "text-zinc-400 hover:text-zinc-300"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "relative flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2",
                billingCycle === "yearly"
                  ? "text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/30"
                  : "text-zinc-400 hover:text-zinc-300"
              )}
            >
              Yearly
              <Badge className="bg-green-500/20 text-green-400 text-[10px] sm:text-xs border-green-500/30 px-1.5 sm:px-2 py-0 sm:py-0.5">
                -48%
              </Badge>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={billingCycle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            >
              {/* Free Plan */}
              <PricingCard plan={freePlan} index={0} />
              
              {/* Paid Plan */}
              {paidPlans.map((plan, index) => (
                <PricingCard key={plan.name} plan={plan} index={1} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Money-back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm">
            <div className="p-1 rounded-full bg-green-500/20">
              <Check className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-green-400 font-semibold text-sm sm:text-base">
              30-day money-back guarantee
            </span>
          </div>

          <p className="text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Not satisfied? Get a full refund within 30 days, no questions asked.
            <br />
            We're confident you'll love our service.
          </p>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-sm text-zinc-500"
        >
          All prices in USD. Taxes may apply. Cancel anytime, no commitments.
        </motion.p>
      </div>
    </section>
  );
}


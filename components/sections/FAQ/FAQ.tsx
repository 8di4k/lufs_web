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
import { TELEGRAM_BOT_URL } from "@/lib/constants/cta";

const faqs = [
  {
    question: "How accurate is the BPM detection?",
    answer:
      "Our BPM detection achieves 90-94% accuracy using 5 advanced AI models working simultaneously. Each model specializes in different aspects of tempo analysis, and we use a consensus algorithm to provide the most reliable result. This industry-leading accuracy works across all music genres.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "We support 1000+ platforms including YouTube, SoundCloud, Spotify, Apple Music, TikTok, Instagram, Bandcamp, Mixcloud, Audiomack, and many more. Just paste the link from any supported platform, and we'll handle the rest. If you find a platform we don't support yet, let us know!",
  },
  {
    question: "How long does analysis take?",
    answer:
      "Most tracks are analyzed in 10-15 seconds. The exact time depends on track length and platform, but we've optimized our pipeline to be lightning fast. No waiting in queues, no unnecessary delays — you get your results almost instantly.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account required! Simply start using the bot directly via Telegram. No sign-up forms, no email verification, no passwords to remember. Just open Telegram, find our bot, and start analyzing. It's that simple.",
  },
  {
    question: "What's included in the free tier?",
    answer:
      "The free tier includes 3 full analyses per week with complete access to all features: BPM detection, musical key identification, Hz tuning analysis, energy level, and tempo classification. Perfect for casual users or to test the service before upgrading.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, absolutely! You can cancel your subscription at any time with instant effect. No cancellation fees, no hidden charges, no questions asked. Your subscription remains active until the end of the current billing period, and you won't be charged again.",
  },
  {
    question: "Is my music data safe?",
    answer:
      "Your privacy is our priority. We analyze your tracks in real-time and immediately delete all data after sending you the results. We don't store your music files, links, or listening history. Everything is ephemeral and completely private.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We support all major audio formats including MP3, WAV, FLAC, AAC, OGG, M4A, WMA, and more. If you're uploading directly (on supported platforms), any format that the platform accepts will work with our analyzer. Our AI models are format-agnostic.",
  },
  {
    question: "What else is detected besides BPM?",
    answer:
      "In addition to BPM, we detect: Musical Key (e.g., A minor, C# major), Hz Tuning (cents deviation from A440), Energy Level (low/medium/high), and Tempo Classification (slow/medium/fast). You get a comprehensive analysis report for every track.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer three plans: Free (3 analyses/week), Monthly ($3.99/month for unlimited analyses), and Yearly ($24.99/year, saving you 48%). All plans include full access to all features. Yearly subscribers save nearly $24 compared to monthly billing.",
  },
];

export function FAQ() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="relative z-10 max-w-4xl mx-auto">
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
            ❓ Got Questions?
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-linear-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Find answers to common questions about our music analysis service.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-zinc-800/50 rounded-lg px-6 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-white hover:text-cyan-400 transition-colors py-5 text-base sm:text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center space-y-4"
        >
          <p className="text-zinc-400">
            Still have questions? We're here to help!
          </p>
          
          <Button
            size="lg"
            className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-8"
            onClick={() => window.open(TELEGRAM_BOT_URL, "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Ask in Telegram
          </Button>

          <p className="text-sm text-zinc-500">
            Get instant answers from our support team
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    </section>
  );
}


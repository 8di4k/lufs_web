/**
 * CTA copy constants for A/B testing
 */

export const CTA_COPY = {
  primary: {
    text: "Open in Telegram",
    microcopy: "Start analyzing in 30 seconds",
  },
  secondary: {
    text: "Watch Demo",
    microcopy: "See how it works",
  },
} as const;

export const SOCIAL_PROOF = {
  users: "10,000+ users",
  analyses: "1M+ tracks analyzed",
  rating: "4.9/5 stars",
} as const;

export const URGENCY = {
  show: false, // Toggle for A/B testing
  text: "🔥 Free tier ending soon",
} as const;

export const TELEGRAM_BOT_URL = "https://t.me/your_bot_name";


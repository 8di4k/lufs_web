"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export function LogoClickEasterEgg({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [clicks, setClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks === 10) {
      setShowSecret(true);
      triggerCelebration();

      // Hide after 5 seconds
      setTimeout(() => {
        setShowSecret(false);
        setClicks(0);
      }, 5000);
    }

    // Reset counter after 3 seconds of inactivity
    setTimeout(() => {
      if (newClicks === clicks) {
        setClicks(0);
      }
    }, 3000);
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00ff88", "#00d4ff", "#ff00ff"],
    });
  };

  return (
    <>
      <div onClick={handleClick} className={className}>
        {children}
      </div>

      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="fixed left-1/2 top-20 z-50 -translate-x-1/2 transform"
          >
            <div className="neon-glow-green rounded-2xl border-2 border-neon-green bg-dark/95 px-8 py-6 backdrop-blur-lg">
              <div className="text-center">
                <p className="mb-2 text-3xl">🎉</p>
                <p className="mb-1 text-xl font-bold text-neon-green">
                  Secret Unlocked!
                </p>
                <p className="text-sm text-gray-400">
                  You&apos;ve analyzed{" "}
                  <span className="font-bold text-neon-cyan">1,337,000+</span>{" "}
                  tracks
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  (and found the easter egg)
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


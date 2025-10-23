"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

export function GlowCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Use ref and direct DOM manipulation instead of state for better performance
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Use transform for better performance (GPU accelerated)
        cursorRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Use passive event listener for better scroll performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, prefersReducedMotion]);

  if (prefersReducedMotion || !isVisible) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed z-50 h-8 w-8 rounded-full will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(0,255,136,0.3) 0%, rgba(0,255,136,0) 70%)",
        left: 0,
        top: 0,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}


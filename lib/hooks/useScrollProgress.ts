"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to track scroll progress of the page
 * @returns number between 0 and 100 representing scroll percentage
 * 
 * @example
 * const scrollProgress = useScrollProgress();
 * // Use in a progress bar: <div style={{ width: `${scrollProgress}%` }} />
 */
export function useScrollProgress(): number {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = window.scrollY;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;

      setScrollProgress(Math.min(100, Math.max(0, scrolled)));
    };

    // Initial calculation
    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return scrollProgress;
}


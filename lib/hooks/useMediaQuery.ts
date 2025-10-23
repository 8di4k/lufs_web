"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to track media query matches
 * @param query - Media query string (e.g., "(min-width: 768px)")
 * @returns boolean indicating if the query matches
 * 
 * @example
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * const isDesktop = useMediaQuery("(min-width: 1024px)");
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [query]);

  // Return false during SSR to avoid hydration mismatch
  if (!mounted) {
    return false;
  }

  return matches;
}


"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

/**
 * Custom hook to track element visibility using Intersection Observer API
 * @param options - IntersectionObserver options
 * @returns tuple of [ref, isIntersecting, entry]
 * 
 * @example
 * const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
 * return <div ref={ref}>{isVisible ? "Visible!" : "Not visible"}</div>;
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T | null>, boolean, IntersectionObserverEntry | null] {
  const {
    threshold = 0,
    root = null,
    rootMargin = "0px",
    freezeOnceVisible = false,
  } = options;

  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const frozen = freezeOnceVisible && isIntersecting;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If frozen, don't observe
    if (frozen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, root, rootMargin, frozen]);

  return [ref, isIntersecting, entry];
}


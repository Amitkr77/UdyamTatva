"use client";

import { useEffect, useRef, type RefObject } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const { threshold = 0.1, rootMargin = "0px 0px -60px 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe all .reveal children
    const revealEls = el.querySelectorAll<HTMLElement>(".reveal");
    revealEls.forEach((child) => observer.observe(child));

    // Also observe the root element itself if it has reveal class
    if (el.classList.contains("reveal")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

export function useSingleReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const { threshold = 0.15 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("active");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

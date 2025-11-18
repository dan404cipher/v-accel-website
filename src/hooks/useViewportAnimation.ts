"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook to pause animations when element is off-screen
 * This significantly improves performance by stopping unnecessary animations
 */
export function useViewportAnimation(options?: {
  rootMargin?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          
          // Pause/resume animations based on visibility
          if (entry.isIntersecting) {
            element.classList.remove("pause-animations");
            element.classList.add("play-animations");
          } else {
            element.classList.remove("play-animations");
            element.classList.add("pause-animations");
          }
        });
      },
      {
        rootMargin: options?.rootMargin || "-50px", // Start pausing 50px before leaving viewport
        threshold: options?.threshold || 0.01,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options?.rootMargin, options?.threshold]);

  return { ref, isVisible };
}


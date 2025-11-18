"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HERO_SELECTOR = "[data-page-hero]";
const MAX_ATTEMPTS = 12;

export function ScrollToTop() {
  const pathname = usePathname();

  // Disable browser scroll restoration and force immediate jumps
  useEffect(() => {
    if (typeof window === "undefined") return;

    const { documentElement } = document;
    const previousBehavior = documentElement.style.scrollBehavior;
    const previousRestoration = window.history.scrollRestoration;

    documentElement.style.scrollBehavior = "auto";
    window.history.scrollRestoration = "manual";

    return () => {
      documentElement.style.scrollBehavior = previousBehavior;
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  // Snap to the hero/top element on every route change
  useEffect(() => {
    if (typeof window === "undefined") return;

    let frame: number | null = null;
    let attempts = 0;

    const snapToHero = () => {
      const heroElement =
        document.querySelector<HTMLElement>(HERO_SELECTOR) ??
        document.querySelector<HTMLElement>("main") ??
        document.body;

      if (heroElement) {
        const { top } = heroElement.getBoundingClientRect();
        const offsetTop = top + window.scrollY;
        window.scrollTo({ top: offsetTop, left: 0, behavior: "auto" });
        return;
      }

      if (attempts < MAX_ATTEMPTS) {
        attempts += 1;
        frame = window.requestAnimationFrame(snapToHero);
      }
    };

    frame = window.requestAnimationFrame(snapToHero);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [pathname]);

  return null;
}


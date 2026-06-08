"use client";

import { useEffect } from "react";

/**
 * Shared scroll-interaction controller for the standalone landing pages.
 *
 * Two jobs, no markup of its own:
 *  1) Scroll-reveal: adds `in-view` to each <section> as it enters the viewport,
 *     so scoped CSS can animate that section's content in (fade / drop / flip).
 *  2) Sticky-header state: toggles `is-scrolled` on the page's <header> once the
 *     user scrolls past the top, so the header can softly shrink + gain shadow.
 *
 * It adds `reveal-ready` to the root first — CSS only hides content when that
 * class is present, so with JS disabled everything renders visible (no FOUC).
 * Respects prefers-reduced-motion.
 */
export default function Reveal({ rootClass }: { rootClass: string }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("." + rootClass);
    if (!root) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const header = root.querySelector<HTMLElement>("header");

    const sections = prefersReduced
      ? []
      : Array.from(root.querySelectorAll<HTMLElement>("section"));
    const pending = new Set(sections);

    const reveal = (el: Element) => {
      el.classList.add("in-view");
      pending.delete(el as HTMLElement);
      io?.unobserve(el);
    };

    // Fallback: reveal anything at/above the viewport. Catches instant jumps
    // (anchor links, hash navigation, scroll restoration) that the observer
    // can skip — guarantees content is never left stuck invisible.
    const sweep = () => {
      const trigger = window.innerHeight * 0.92;
      pending.forEach((s) => {
        if (s.getBoundingClientRect().top < trigger) reveal(s);
      });
    };

    // --- sticky header state + reveal sweep ---
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
        if (pending.size) sweep();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // --- scroll reveal (observer for smooth scrolling) ---
    let io: IntersectionObserver | undefined;
    if (!prefersReduced) {
      root.classList.add("reveal-ready");
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );
      sections.forEach((s) => io?.observe(s));
      requestAnimationFrame(sweep);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, [rootClass]);

  return null;
}

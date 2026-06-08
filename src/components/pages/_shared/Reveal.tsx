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

    // --- sticky header state ---
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // --- scroll reveal ---
    let io: IntersectionObserver | undefined;
    if (!prefersReduced) {
      root.classList.add("reveal-ready");
      const sections = Array.from(root.querySelectorAll<HTMLElement>("section"));
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      sections.forEach((s) => io?.observe(s));

      // Safety net: if a section is already on-screen at mount, reveal it.
      requestAnimationFrame(() => {
        sections.forEach((s) => {
          const r = s.getBoundingClientRect();
          if (r.top < window.innerHeight * 0.9) s.classList.add("in-view");
        });
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, [rootClass]);

  return null;
}

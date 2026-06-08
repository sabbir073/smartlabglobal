"use client";

import { useEffect, useState } from "react";
import { BRAND } from "../data";

/**
 * Sticky bottom CTA bar on mobile after the user has scrolled past the hero.
 * Always two paths: high-intent "Book a Call" + low-friction "WhatsApp".
 */
export default function MobileStickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = window.scrollY / Math.max(docH, 1);
      setShow(pct > 0.15);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="sl-mobile-cta" role="region" aria-label="Quick actions">
      <a
        href="#book-call"
        className="sl-btn-primary"
        style={{ minHeight: 44, padding: "10px 16px" }}
      >
        Book a Call
      </a>
      <a
        href={`https://wa.me/${BRAND.whatsapp}`}
        className="sl-btn-ghost"
        style={{ minHeight: 44, padding: "10px 16px" }}
      >
        WhatsApp
      </a>
    </div>
  );
}

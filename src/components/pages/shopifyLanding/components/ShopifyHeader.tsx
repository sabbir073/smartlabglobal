"use client";

import { useEffect, useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { BRAND, NAV_ITEMS } from "../data";

/** Sun/moon switcher icons that follow the button's currentColor. */
function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Light mode" : "Dark mode"}
      className="w-9 h-9 rounded-full grid place-items-center"
      style={{
        background: "var(--sl-bg-glass)",
        border: "1px solid var(--sl-border-strong)",
        color: "var(--sl-text-primary)",
        flex: "none",
      }}
    >
      {isDarkMode ? (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

/**
 * Sticky glass-pill header for the Shopify landing.
 * Hides on scroll-down, reveals on scroll-up (Headroom pattern).
 */
export default function ShopifyHeader() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const goingDown = y > lastY && y > 120;
        setHidden(goingDown);
        setSolid(y > 24);
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="sl-header px-3 md:px-6"
        data-hidden={hidden ? "true" : "false"}
      >
        <div className="max-w-[1200px] mx-auto sl-header-pill">
          <a
            href="#top"
            className="flex items-center gap-2 font-semibold tracking-tight"
            style={{ color: "var(--sl-text-primary)" }}
            aria-label={BRAND.name}
          >
            <span
              className="inline-grid place-items-center w-7 h-7 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, var(--sl-accent-primary), var(--sl-accent-warm))",
                boxShadow: "0 0 18px -4px var(--sl-accent-primary)",
              }}
              aria-hidden
            >
              <span className="text-[12px] font-bold text-black">S</span>
            </span>
            <span className="text-[14px] hidden sm:inline">
              {BRAND.shortName} <span className="opacity-60">/ Shopify</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 ml-2">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="sl-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20my%20Shopify%20store`}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full text-[13px]"
              style={{
                background: "rgba(16, 240, 160, 0.08)",
                border: "1px solid rgba(16, 240, 160, 0.25)",
                color: "var(--sl-success)",
              }}
              aria-label="WhatsApp us"
            >
              <span aria-hidden>●</span>
              WhatsApp
            </a>
            <a href="#book-call" className="sl-btn-primary !min-h-[40px] !py-2 !px-4 text-[13px]">
              Book a Call
            </a>
            <button
              className="lg:hidden w-9 h-9 rounded-full grid place-items-center"
              style={{
                background: "var(--sl-bg-glass)",
                border: "1px solid var(--sl-border-strong)",
                color: "var(--sl-text-primary)",
              }}
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span
                aria-hidden
                style={{
                  display: "inline-block",
                  width: 14,
                  height: 10,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderTop: "1.5px solid currentColor",
                    borderBottom: "1.5px solid currentColor",
                    transform: open ? "rotate(45deg) scaleX(0.7)" : "none",
                    transition: "transform 0.2s ease",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[120] lg:hidden"
          style={{
            background: "var(--sl-overlay)",
            backdropFilter: "blur(28px)",
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full grid place-items-center"
              style={{
                background: "var(--sl-bg-glass)",
                border: "1px solid var(--sl-border-strong)",
                color: "var(--sl-text-primary)",
              }}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col items-center gap-2 px-8 mt-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-white py-3"
                style={{ letterSpacing: "-0.02em" }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#book-call"
              onClick={() => setOpen(false)}
              className="sl-btn-primary mt-6 w-full"
            >
              Book a Free Strategy Call →
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              className="sl-btn-ghost w-full"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

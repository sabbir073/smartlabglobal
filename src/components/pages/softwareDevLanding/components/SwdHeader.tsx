"use client";

import { useEffect, useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { BRAND, NAV_ITEMS } from "../data";

/**
 * Header for the Custom Software Development landing page.
 * Sticky blueprint bar. Includes the site-wide dark/light switcher
 * (useDarkMode toggles the `dark` class on <html>, persisted to localStorage).
 */
export default function SwdHeader() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [open, setOpen] = useState(false);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="swd-header">
      <div className="swd-container" style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <a href="#top" className="swd-brand" aria-label={BRAND.name}>
          <span className="swd-brand-mark">S</span>
          <span>
            {BRAND.shortName}{" "}
            <span style={{ color: "var(--swd-faint)", fontWeight: 500 }}>/ Software</span>
          </span>
        </a>

        <nav className="swd-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <button
            className="swd-theme-btn"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={isDarkMode ? "Light mode" : "Dark mode"}
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>

          <a href="#book-call" className="swd-btn swd-btn-primary" style={{ padding: "11px 18px", fontSize: 14 }}>
            Book a Call
          </a>

          <button
            className="swd-theme-btn"
            style={{ display: "grid" }}
            data-mobile-toggle
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden"
          style={{
            position: "fixed",
            inset: 0,
            top: "var(--swd-header-h)",
            background: "var(--swd-bg)",
            zIndex: 95,
            padding: "24px 20px",
          }}
          role="dialog"
          aria-modal="true"
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--swd-ink)",
                  textDecoration: "none",
                  padding: "14px 6px",
                  borderBottom: "1px solid var(--swd-line)",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#book-call"
              onClick={() => setOpen(false)}
              className="swd-btn swd-btn-primary"
              style={{ marginTop: 20, justifyContent: "center" }}
            >
              Book a Free Call →
            </a>
          </nav>
        </div>
      )}

      <style jsx>{`
        [data-mobile-toggle] {
          display: grid;
        }
        @media (min-width: 1024px) {
          [data-mobile-toggle] {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

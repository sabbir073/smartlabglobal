"use client";

import { useEffect, useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { BRAND, NAV_ITEMS } from "../data";

/** Theme switcher reused from the main site (useDarkMode → `dark` on <html>). */
function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      type="button"
      className="ecm-icon-btn"
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Light mode" : "Dark mode"}
    >
      {isDarkMode ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function EcmHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="ecm-header">
      <div className="ecm-wrap" style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <a href="#top" className="ecm-brand" aria-label={BRAND.name}>
          <span className="ecm-brand-mark">S</span>
          <span>
            {BRAND.shortName}
            <span style={{ color: "var(--ecm-faint)", fontWeight: 500 }}> / Commerce</span>
          </span>
        </a>

        <nav className="ecm-nav" aria-label="Primary">
          {NAV_ITEMS.map((i) => (
            <a key={i.href} href={i.href}>
              {i.label}
            </a>
          ))}
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <ThemeToggle />
          <a href="#book-call" className="ecm-btn ecm-btn-primary" style={{ padding: "11px 20px", fontSize: 14.5 }}>
            Book a Free Call
          </a>
          <button
            className="ecm-icon-btn"
            data-ecm-burger
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "var(--ecm-header-h)",
            background: "var(--ecm-bg)",
            zIndex: 95,
            padding: "26px 22px",
          }}
          role="dialog"
          aria-modal="true"
        >
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {NAV_ITEMS.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--ecm-display)",
                  fontSize: 21,
                  fontWeight: 600,
                  color: "var(--ecm-ink)",
                  textDecoration: "none",
                  padding: "15px 4px",
                  borderBottom: "1px solid var(--ecm-line-soft)",
                }}
              >
                {i.label}
              </a>
            ))}
            <a
              href="#book-call"
              onClick={() => setOpen(false)}
              className="ecm-btn ecm-btn-primary"
              style={{ marginTop: 22 }}
            >
              Book a Free Call →
            </a>
          </nav>
        </div>
      )}

      <style jsx>{`
        [data-ecm-burger] {
          display: grid;
        }
        @media (min-width: 1024px) {
          [data-ecm-burger] {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

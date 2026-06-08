import { BRAND } from "../../data";

/**
 * Hero — H1 is the LCP element (text, not image) per PRD performance budget.
 * Right-side mockup is decorative SVG (no real image needed in v1).
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-10 md:pt-16 pb-16 md:pb-28 px-4 md:px-6"
    >
      <div className="sl-aurora" aria-hidden />
      <div className="sl-grain" aria-hidden />

      <div className="relative max-w-[1200px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <div className="sl-eyebrow mb-6">
            <span className="dot" aria-hidden />
            <span>Booking projects for July — 3 slots left</span>
          </div>

          <h1 className="sl-display text-white text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px]">
            We build Shopify stores that{" "}
            <span className="sl-grad-text">actually sell.</span>
          </h1>

          <p
            className="mt-6 text-lg md:text-xl max-w-[560px]"
            style={{ color: "var(--sl-text-secondary)", lineHeight: 1.55 }}
          >
            Custom design, blazing speed, CRO baked in — for DTC brands that
            refuse to look generic. Shipped in 14 days. Money-back if we miss.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#book-call" className="sl-btn-primary">
              Book a Free Strategy Call
              <span aria-hidden>→</span>
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi%2C%20I%27d%20like%20a%20Shopify%20quote`}
              className="sl-btn-ghost"
            >
              WhatsApp Us
            </a>
          </div>

          <ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm"
            style={{ color: "var(--sl-text-muted)" }}
          >
            <li className="flex items-center gap-2">
              <span style={{ color: "#FFB454" }}>★</span> 4.9 on Clutch
            </li>
            <li className="flex items-center gap-2">
              <span>🛒</span> Shopify Partner
            </li>
            <li className="flex items-center gap-2">
              <span>🔒</span> NDA-protected
            </li>
            <li className="flex items-center gap-2">
              <span>💰</span> 30-day refund
            </li>
          </ul>
        </div>

        {/* Right: glass dashboard mockup (decorative SVG) */}
        <div className="relative hidden lg:block">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div
      className="sl-glass sl-ring p-5 rounded-[28px]"
      style={{ aspectRatio: "5 / 4" }}
      aria-hidden
    >
      <div
        className="flex items-center justify-between mb-4"
        style={{ color: "var(--sl-text-muted)", fontSize: 12 }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#FF5A6B" }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#FFB454" }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#10F0A0" }}
          />
          <span className="ml-3 sl-mono">shopify.dashboard / live</span>
        </div>
        <span className="sl-mono">v 2026.06</span>
      </div>

      {/* Top KPI row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Revenue today", value: "$48,290", trend: "+ 187%", trendColor: "var(--sl-success)" },
          { label: "Sessions", value: "12,418", trend: "+ 41%", trendColor: "var(--sl-accent-warm)" },
          { label: "CR", value: "3.84%", trend: "+ 2.4pp", trendColor: "var(--sl-success)" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-2xl p-3"
            style={{
              background: "var(--sl-surface-1)",
              border: "1px solid var(--sl-border-glass)",
            }}
          >
            <div style={{ fontSize: 11, color: "var(--sl-text-muted)" }}>
              {kpi.label}
            </div>
            <div
              className="sl-mono mt-1"
              style={{ fontSize: 18, color: "var(--sl-text-primary)" }}
            >
              {kpi.value}
            </div>
            <div
              className="sl-mono mt-1"
              style={{ fontSize: 11, color: kpi.trendColor }}
            >
              {kpi.trend}
            </div>
          </div>
        ))}
      </div>

      {/* Fake chart */}
      <div
        className="mt-4 rounded-2xl p-4 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,67,6,0.10) 0%, rgba(255,67,6,0) 100%)",
          border: "1px solid var(--sl-border-glass)",
          height: 180,
        }}
      >
        <svg
          viewBox="0 0 400 160"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          <defs>
            <linearGradient id="sl-h-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#FFB454" />
              <stop offset="0.5" stopColor="#FF4306" />
              <stop offset="1" stopColor="#FF6B9D" />
            </linearGradient>
            <linearGradient id="sl-h-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FF4306" stopOpacity="0.45" />
              <stop offset="1" stopColor="#FF4306" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,120 L40,110 L80,118 L120,90 L160,95 L200,70 L240,80 L280,50 L320,55 L360,30 L400,18 L400,160 L0,160 Z"
            fill="url(#sl-h-fill)"
          />
          <path
            d="M0,120 L40,110 L80,118 L120,90 L160,95 L200,70 L240,80 L280,50 L320,55 L360,30 L400,18"
            stroke="url(#sl-h-line)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-full sl-mono"
          style={{
            fontSize: 10,
            background: "rgba(16,240,160,0.12)",
            color: "var(--sl-success)",
            border: "1px solid rgba(16,240,160,0.3)",
          }}
        >
          ● LIVE
        </div>
      </div>

      <div
        className="mt-4 flex items-center gap-3 text-[11px]"
        style={{ color: "var(--sl-text-muted)" }}
      >
        <span className="sl-mono">last commit · 4 min ago</span>
        <span>·</span>
        <span className="sl-mono">LCP 1.1s</span>
        <span>·</span>
        <span className="sl-mono">INP 78ms</span>
      </div>
    </div>
  );
}

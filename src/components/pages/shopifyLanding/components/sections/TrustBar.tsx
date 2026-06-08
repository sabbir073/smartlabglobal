import { TRUST_LOGOS } from "../../data";

/**
 * Logo trust bar with infinite-loop marquee + headline + animated counter (CSS).
 */
export default function TrustBar() {
  return (
    <section className="relative py-12 md:py-16 px-4 md:px-6 border-t border-b"
      style={{ borderColor: "var(--sl-border-glass)" }}
    >
      <div className="relative max-w-[1200px] mx-auto">
        <p
          className="text-center text-sm mb-8 sl-mono"
          style={{ color: "var(--sl-text-muted)" }}
        >
          Trusted by 500+ Shopify brands across 32 countries
        </p>

        <div className="sl-marquee">
          <div className="sl-marquee-track">
            {[...TRUST_LOGOS, ...TRUST_LOGOS].map((label, i) => (
              <div
                key={`${label}-${i}`}
                className="shrink-0 px-4 py-2 rounded-lg"
                style={{
                  color: "var(--sl-text-muted)",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  border: "1px solid var(--sl-border-glass)",
                  background: "var(--sl-surface-1)",
                  minWidth: 160,
                  textAlign: "center",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="sl-mono sl-grad-text inline-block text-3xl md:text-4xl font-bold">
            $127M+
          </div>
          <span
            className="ml-3 align-middle text-sm"
            style={{ color: "var(--sl-text-muted)" }}
          >
            in client revenue generated
          </span>
        </div>
      </div>
    </section>
  );
}

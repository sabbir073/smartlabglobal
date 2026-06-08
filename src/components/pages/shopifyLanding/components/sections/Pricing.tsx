import { PRICING } from "../../data";

/**
 * Pricing — 3 tiers, Growth tier is featured with orange glow + popular badge.
 */
export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="relative max-w-[1200px] mx-auto">
        <div className="max-w-[820px] mb-14">
          <p
            className="sl-mono text-sm mb-4"
            style={{ color: "var(--sl-accent-primary-soft)" }}
          >
            06 — PRICING
          </p>
          <h2 className="sl-display text-white text-[34px] md:text-[52px]">
            Transparent pricing.{" "}
            <span className="sl-grad-text">No bullshit estimates.</span>
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: "var(--sl-text-secondary)" }}
          >
            Pick the closest plan. We&apos;ll confirm scope on the call. Custom
            scoping available if none fits.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {PRICING.map((tier) => (
            <article
              key={tier.name}
              className={[
                "sl-glass p-7 md:p-8 relative",
                tier.featured ? "sl-glass-hover sl-ring" : "sl-glass-hover",
              ].join(" ")}
              style={{
                borderRadius: "var(--sl-r-xl)",
                boxShadow: tier.featured
                  ? "var(--sl-shadow-card), 0 0 80px -30px var(--sl-accent-primary)"
                  : "var(--sl-shadow-card)",
              }}
            >
              {tier.featured && (
                <div
                  className="absolute -top-3 left-7 sl-mono text-[11px] px-3 py-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(120deg, var(--sl-accent-primary), var(--sl-accent-warm))",
                    color: "#0A0A0F",
                    fontWeight: 700,
                  }}
                >
                  MOST PICKED
                </div>
              )}

              <h3
                className="font-semibold text-white text-xl mb-1"
                style={{ letterSpacing: "-0.02em" }}
              >
                {tier.name}
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--sl-text-muted)" }}
              >
                {tier.forWhom}
              </p>

              <div className="mt-5 flex items-baseline gap-2">
                <span
                  className="sl-mono text-xs"
                  style={{ color: "var(--sl-text-muted)" }}
                >
                  From
                </span>
                <span
                  className="sl-display"
                  style={{
                    color: "var(--sl-text-primary)",
                    fontSize: 42,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {tier.from}
                </span>
              </div>
              <p
                className="mt-1 sl-mono text-[12px]"
                style={{ color: "var(--sl-text-muted)" }}
              >
                · {tier.delivery} delivery
              </p>

              <ul className="mt-6 space-y-3">
                {tier.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px]"
                    style={{ color: "var(--sl-text-secondary)" }}
                  >
                    <span
                      style={{
                        color: "var(--sl-accent-primary-soft)",
                        marginTop: 2,
                      }}
                      aria-hidden
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#book-call"
                className={tier.featured ? "sl-btn-primary mt-8 w-full" : "sl-btn-ghost mt-8 w-full"}
              >
                {tier.cta} →
              </a>
            </article>
          ))}
        </div>

        <div
          className="mt-8 text-center text-sm"
          style={{ color: "var(--sl-text-muted)" }}
        >
          🔒 30-day money-back guarantee on every plan.{" "}
          <a
            href="#book-call"
            style={{ color: "var(--sl-accent-primary-soft)" }}
          >
            See the fine print →
          </a>
        </div>
      </div>
    </section>
  );
}

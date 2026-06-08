import { COMPARISON_ROWS } from "../../data";

const BRAND_LABEL = "Smart Lab Global";

/**
 * Comparison — DIY vs Random Freelancer vs Us. Our column subtly glows.
 */
export default function Comparison() {
  const columns: ReadonlyArray<{
    key: "diy" | "freelancer" | "us";
    label: string;
    sub: string;
    highlight?: boolean;
  }> = [
    { key: "diy", label: "DIY", sub: "Theme + you" },
    { key: "freelancer", label: "Random Freelancer", sub: "Cheap. Maybe." },
    { key: "us", label: BRAND_LABEL, sub: "Engineering-grade", highlight: true },
  ];

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="relative max-w-[1100px] mx-auto">
        <div className="max-w-[820px] mb-14">
          <p
            className="sl-mono text-sm mb-4"
            style={{ color: "var(--sl-accent-primary-soft)" }}
          >
            07 — APPLES TO APPLES
          </p>
          <h2 className="sl-display text-white text-[34px] md:text-[52px]">
            What you actually get,{" "}
            <span className="sl-grad-text">across the options.</span>
          </h2>
        </div>

        <div
          className="sl-glass overflow-hidden"
          style={{ borderRadius: "var(--sl-r-xl)" }}
        >
          <div
            className="grid grid-cols-[2fr_repeat(3,1fr)] text-[13px]"
            style={{
              background: "var(--sl-surface-1)",
              borderBottom: "1px solid var(--sl-border-glass)",
            }}
          >
            <div
              className="p-5 sl-mono"
              style={{ color: "var(--sl-text-muted)" }}
            >
              Capability
            </div>
            {columns.map((c) => (
              <div
                key={c.key}
                className="p-5 text-center"
                style={{
                  color: c.highlight ? "var(--sl-text-primary)" : "var(--sl-text-secondary)",
                  background: c.highlight ? "rgba(255,67,6,0.06)" : "transparent",
                  borderLeft: "1px solid var(--sl-border-glass)",
                }}
              >
                <div
                  className="font-semibold"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {c.label}
                </div>
                <div
                  className="sl-mono text-[11px] mt-1"
                  style={{ color: "var(--sl-text-muted)" }}
                >
                  {c.sub}
                </div>
              </div>
            ))}
          </div>

          {COMPARISON_ROWS.map((row, idx) => (
            <div
              key={row.label}
              className="grid grid-cols-[2fr_repeat(3,1fr)] text-[14px]"
              style={{
                borderBottom:
                  idx < COMPARISON_ROWS.length - 1
                    ? "1px solid var(--sl-border-glass)"
                    : "none",
              }}
            >
              <div
                className="p-4 md:p-5"
                style={{ color: "var(--sl-text-secondary)" }}
              >
                {row.label}
              </div>
              {(["diy", "freelancer", "us"] as const).map((k) => {
                const value = row[k];
                const isUs = k === "us";
                return (
                  <div
                    key={k}
                    className="p-4 md:p-5 text-center"
                    style={{
                      borderLeft: "1px solid var(--sl-border-glass)",
                      background: isUs ? "rgba(255,67,6,0.04)" : "transparent",
                    }}
                  >
                    {value ? (
                      <span
                        style={{
                          color: isUs ? "var(--sl-accent-primary-soft)" : "var(--sl-success)",
                          fontWeight: 600,
                        }}
                        aria-label="Yes"
                      >
                        ✓
                      </span>
                    ) : (
                      <span
                        style={{ color: "var(--sl-text-faint)" }}
                        aria-label="No"
                      >
                        ✕
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { TESTIMONIALS } from "../../data";

/**
 * Testimonials wall — masonry-style via CSS columns.
 * v1 uses text quotes only; video Loom thumbnails go here in v2.
 */
export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="relative max-w-[1200px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-[820px]">
            <p
              className="sl-mono text-sm mb-4"
              style={{ color: "var(--sl-accent-primary-soft)" }}
            >
              08 — VOICES
            </p>
            <h2 className="sl-display text-white text-[34px] md:text-[52px]">
              Don&apos;t take our word for it.
            </h2>
          </div>
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-2xl"
            style={{
              background: "var(--sl-bg-glass)",
              border: "1px solid var(--sl-border-glass)",
            }}
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: "#FFB454" }}>
                  ★
                </span>
              ))}
            </div>
            <div className="leading-tight">
              <div
                className="sl-mono text-sm"
                style={{ color: "var(--sl-text-primary)" }}
              >
                4.9 / 5
              </div>
              <div
                className="text-[11px]"
                style={{ color: "var(--sl-text-muted)" }}
              >
                Clutch + Google verified
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            columnCount: 1,
            columnGap: 16,
          }}
          className="md:[column-count:2] lg:[column-count:3]"
        >
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name + i}
              className="sl-glass sl-glass-hover p-6 mb-4 break-inside-avoid"
              style={{ borderRadius: "var(--sl-r-lg)" }}
            >
              <div className="flex mb-3" style={{ color: "#FFB454" }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p
                className="text-[15px] mb-5"
                style={{
                  color: "var(--sl-text-primary)",
                  lineHeight: 1.55,
                }}
              >
                “{t.quote}”
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full grid place-items-center sl-mono text-xs"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--sl-accent-primary), var(--sl-accent-warm))",
                    color: "#0A0A0F",
                    fontWeight: 700,
                  }}
                  aria-hidden
                >
                  {t.name.charAt(0)}
                </div>
                <div className="leading-tight">
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--sl-text-primary)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[12px]"
                    style={{ color: "var(--sl-text-muted)" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SERVICES } from "../../data";

/**
 * Asymmetric bento grid. First two services are the large "featured" tiles.
 * Each service maps to an anchor ID so Google Ads ad-groups can deep-link.
 */
export default function ServicesBento() {
  return (
    <section id="services" className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="relative max-w-[1200px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-[760px]">
            <p
              className="sl-mono text-sm mb-4"
              style={{ color: "var(--sl-accent-primary-soft)" }}
            >
              02 — WHAT WE SHIP
            </p>
            <h2 className="sl-display text-white text-[34px] md:text-[52px]">
              Everything your Shopify store needs.
              <br />
              <span className="sl-grad-text">Under one roof.</span>
            </h2>
          </div>
          <a href="#book-call" className="sl-btn-ghost">
            Get a free audit →
          </a>
        </div>

        <div className="sl-bento">
          {SERVICES.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              id={s.id}
              className={[
                "sl-glass sl-glass-hover block group",
                s.size === "lg"
                  ? "sl-bento-lg"
                  : s.size === "md"
                  ? "sl-bento-md"
                  : "sl-bento-sm",
              ].join(" ")}
              style={{
                padding: s.size === "lg" ? 32 : 20,
                textDecoration: "none",
              }}
            >
              <div className="flex flex-col h-full justify-between gap-6">
                <div>
                  <ServiceIcon index={i} size={s.size} />
                  <h3
                    className={[
                      "font-semibold text-white mt-5",
                      s.size === "lg"
                        ? "text-3xl md:text-4xl"
                        : "text-xl md:text-2xl",
                    ].join(" ")}
                    style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-3 text-[15px]"
                    style={{ color: "var(--sl-text-secondary)", lineHeight: 1.55 }}
                  >
                    {s.blurb}
                  </p>
                </div>
                <div
                  className="flex items-center gap-2 sl-mono text-[12px]"
                  style={{ color: "var(--sl-text-muted)" }}
                >
                  <span>Learn more</span>
                  <span
                    style={{
                      display: "inline-block",
                      transition: "transform 0.2s ease",
                    }}
                    className="group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Minimalist line-icon set in pure SVG, no external lib */
function ServiceIcon({ index, size }: { index: number; size: "lg" | "md" | "sm" }) {
  const dim = size === "lg" ? 44 : 32;
  const stroke = "var(--sl-accent-primary-soft)";
  const shapes = [
    <path key="a" d="M4 16L16 4l12 12-12 12z" />,
    <path key="b" d="M4 4h24v24H4z M10 16h12" />,
    <path key="c" d="M16 4v24 M4 16h24" />,
    <path key="d" d="M4 24c4-12 20-12 24 0" />,
    <path key="e" d="M6 8h20v8H6z M6 22h20" />,
    <path key="f" d="M16 4l12 8-12 8-12-8z M4 20l12 8 12-8" />,
    <path key="g" d="M4 16a12 12 0 1 0 24 0 12 12 0 1 0-24 0" />,
    <path key="h" d="M6 6l20 20 M26 6L6 26" />,
    <path key="i" d="M4 8l12 6 12-6 M4 16l12 6 12-6 M4 24l12 6 12-6" />,
    <path key="j" d="M6 10h20v12H6z M10 22v6 M22 22v6" />,
    <path key="k" d="M16 4v12 M4 28a12 12 0 0 1 24 0" />,
    <path key="l" d="M4 4h12v12H4z M16 16h12v12H16z" />,
  ];

  return (
    <div
      className="rounded-xl grid place-items-center"
      style={{
        width: dim + 16,
        height: dim + 16,
        background: "rgba(255,67,6,0.08)",
        border: "1px solid rgba(255,67,6,0.18)",
      }}
      aria-hidden
    >
      <svg
        width={dim - 8}
        height={dim - 8}
        viewBox="0 0 32 32"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {shapes[index % shapes.length]}
      </svg>
    </div>
  );
}

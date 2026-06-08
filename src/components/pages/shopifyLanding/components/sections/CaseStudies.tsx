import { CASE_STUDIES } from "../../data";

/**
 * Case studies — full-width glass cards with mono metric row.
 */
export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative py-20 md:py-28 px-4 md:px-6"
    >
      <div className="relative max-w-[1200px] mx-auto">
        <div className="max-w-[820px] mb-14">
          <p
            className="sl-mono text-sm mb-4"
            style={{ color: "var(--sl-accent-primary-soft)" }}
          >
            04 — RECEIPTS
          </p>
          <h2 className="sl-display text-white text-[34px] md:text-[52px]">
            Real stores. Real numbers.{" "}
            <span className="sl-grad-text">Real receipts.</span>
          </h2>
        </div>

        <div className="grid gap-5">
          {CASE_STUDIES.map((cs, i) => (
            <article
              key={cs.brand}
              className="sl-glass sl-glass-hover p-6 md:p-8 grid md:grid-cols-[1fr_1.1fr] gap-6 md:gap-10"
              style={{ borderRadius: "var(--sl-r-lg)" }}
            >
              <div>
                <div
                  className="sl-mono text-[12px]"
                  style={{ color: "var(--sl-text-muted)" }}
                >
                  Case 0{i + 1} · {cs.niche}
                </div>
                <h3
                  className="font-semibold text-white mt-2 text-2xl md:text-3xl"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {cs.brand}
                </h3>
                <p
                  className="mt-4 text-[15px]"
                  style={{ color: "var(--sl-text-secondary)", lineHeight: 1.6 }}
                >
                  {cs.summary}
                </p>
                <a
                  href="#book-call"
                  className="inline-block mt-5 text-sm font-medium"
                  style={{ color: "var(--sl-accent-primary-soft)" }}
                >
                  Read full case study →
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {cs.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl p-4 flex flex-col justify-between"
                    style={{
                      background: "rgba(255,67,6,0.06)",
                      border: "1px solid rgba(255,67,6,0.15)",
                      minHeight: 110,
                    }}
                  >
                    <div
                      className="sl-mono text-[11px]"
                      style={{ color: "var(--sl-text-muted)" }}
                    >
                      {m.label}
                    </div>
                    <div
                      className="sl-mono mt-2 text-lg md:text-xl"
                      style={{ color: "var(--sl-text-primary)" }}
                    >
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#book-call" className="sl-btn-ghost">
            View all 47 case studies →
          </a>
        </div>
      </div>
    </section>
  );
}

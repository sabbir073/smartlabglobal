import { PROBLEM_CARDS } from "../../data";

/**
 * Problem agitation — three-card row using the PAS framework.
 */
export default function ProblemAgitation() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="relative max-w-[1200px] mx-auto">
        <div className="max-w-[820px]">
          <p
            className="sl-mono text-sm mb-4"
            style={{ color: "var(--sl-accent-primary-soft)" }}
          >
            01 — THE LEAK
          </p>
          <h2 className="sl-display text-white text-[34px] md:text-[52px]">
            Your Shopify store is leaking money.
            <br />
            <span className="sl-grad-text">You just can&apos;t see it.</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {PROBLEM_CARDS.map((card, i) => (
            <article
              key={card.title}
              className="sl-glass sl-glass-hover p-6 md:p-7"
              style={{ borderRadius: "var(--sl-r-lg)" }}
            >
              <div
                className="sl-mono text-xs mb-4"
                style={{ color: "var(--sl-text-muted)" }}
              >
                0{i + 1}
              </div>
              <h3
                className="font-semibold text-white text-xl mb-3"
                style={{ letterSpacing: "-0.02em" }}
              >
                {card.title}
              </h3>
              <p
                className="text-[15px]"
                style={{ color: "var(--sl-text-secondary)", lineHeight: 1.6 }}
              >
                {card.body}
              </p>
              <p
                className="mt-4 sl-mono text-[11px]"
                style={{ color: "var(--sl-text-faint)" }}
              >
                Source · {card.source}
              </p>
            </article>
          ))}
        </div>

        <p
          className="mt-10 text-lg md:text-xl"
          style={{ color: "var(--sl-text-secondary)" }}
        >
          We fix all three.{" "}
          <span className="text-white font-semibold">In 14 days.</span>
        </p>
      </div>
    </section>
  );
}

import { WHY_US } from "../../data";

/**
 * Why-Us — 6 differentiator glass cards in a 2-column / 3-row grid.
 */
export default function WhyUs() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="relative max-w-[1200px] mx-auto">
        <div className="max-w-[820px] mb-14">
          <p
            className="sl-mono text-sm mb-4"
            style={{ color: "var(--sl-accent-primary-soft)" }}
          >
            05 — WHY US
          </p>
          <h2 className="sl-display text-white text-[34px] md:text-[52px]">
            Why founders pick us over a{" "}
            <span className="sl-grad-text">$5K agency</span> or a{" "}
            <span className="sl-grad-text">$5/hr freelancer.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {WHY_US.map((card) => (
            <article
              key={card.title}
              className="sl-glass sl-glass-hover p-6 md:p-7 flex gap-5 items-start"
              style={{ borderRadius: "var(--sl-r-lg)" }}
            >
              <div
                className="text-3xl shrink-0 grid place-items-center w-12 h-12 rounded-xl"
                style={{
                  background: "rgba(255,67,6,0.08)",
                  border: "1px solid rgba(255,67,6,0.18)",
                }}
                aria-hidden
              >
                {card.icon}
              </div>
              <div>
                <h3
                  className="font-semibold text-white text-lg mb-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[15px]"
                  style={{ color: "var(--sl-text-secondary)", lineHeight: 1.55 }}
                >
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

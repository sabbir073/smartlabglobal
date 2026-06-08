import { PROCESS_STEPS } from "../../data";

/**
 * Process / "How We Work" — horizontal timeline on desktop, vertical on mobile.
 */
export default function Process() {
  return (
    <section id="process" className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="relative max-w-[1200px] mx-auto">
        <div className="max-w-[820px] mb-14">
          <p
            className="sl-mono text-sm mb-4"
            style={{ color: "var(--sl-accent-primary-soft)" }}
          >
            03 — THE PLAY-BY-PLAY
          </p>
          <h2 className="sl-display text-white text-[34px] md:text-[52px]">
            From kickoff to launch in 14 days.
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: "var(--sl-text-secondary)" }}
          >
            No mystery boxes. Here&apos;s exactly how the next two weeks look.
          </p>
        </div>

        <div className="relative grid lg:grid-cols-5 gap-4 lg:gap-3 pl-6 lg:pl-0">
          <div className="sl-timeline-line" aria-hidden />

          {PROCESS_STEPS.map((step, i) => (
            <article
              key={step.title}
              className="sl-glass sl-glass-hover relative p-5 md:p-6"
              style={{ borderRadius: "var(--sl-r-lg)" }}
            >
              <div
                className="absolute -top-3 left-6 sl-mono text-[11px] px-2 py-0.5 rounded-full"
                style={{
                  background: "var(--sl-bg-canvas)",
                  border: "1px solid var(--sl-border-strong)",
                  color: "var(--sl-accent-primary-soft)",
                }}
              >
                {step.day}
              </div>
              <div
                className="sl-mono text-3xl mb-3"
                style={{ color: "var(--sl-text-primary)", opacity: 0.6 }}
              >
                0{i + 1}
              </div>
              <h3
                className="font-semibold text-white mb-2"
                style={{ fontSize: 18, letterSpacing: "-0.02em" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[14px]"
                style={{ color: "var(--sl-text-secondary)", lineHeight: 1.55 }}
              >
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

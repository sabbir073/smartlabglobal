import { FAQS } from "../../data";

/**
 * FAQ — semantic <details>/<summary> per PRD §6.13.
 * FAQPage JSON-LD is emitted from page.tsx (server) for SEO.
 */
export default function Faq() {
  return (
    <section id="faq" className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="relative max-w-[820px] mx-auto">
        <p
          className="sl-mono text-sm mb-4 text-center"
          style={{ color: "var(--sl-accent-primary-soft)" }}
        >
          10 — FAQ
        </p>
        <h2 className="sl-display text-white text-[34px] md:text-[52px] text-center mb-14">
          Questions we get{" "}
          <span className="sl-grad-text">every single day.</span>
        </h2>

        <div className="grid gap-3">
          {FAQS.map((item) => (
            <details key={item.q} className="sl-faq">
              <summary>
                <span className="text-[16px] md:text-[17px]">{item.q}</span>
                <span className="chev" aria-hidden>
                  +
                </span>
              </summary>
              <div className="sl-faq-body">{item.a}</div>
            </details>
          ))}
        </div>

        <p
          className="text-center mt-10 text-sm"
          style={{ color: "var(--sl-text-muted)" }}
        >
          Question we missed?{" "}
          <a
            href="#book-call"
            style={{ color: "var(--sl-accent-primary-soft)" }}
          >
            Ask on the call →
          </a>
        </p>
      </div>
    </section>
  );
}

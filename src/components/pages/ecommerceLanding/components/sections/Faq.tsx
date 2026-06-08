import { FAQS } from "../../data";

export default function Faq() {
  return (
    <section id="faq" className="ecm-section ecm-section--alt">
      <div className="ecm-wrap">
        <div className="ecm-head ecm-center">
          <span className="ecm-kicker">Questions &amp; objections</span>
          <h2 className="ecm-h2" style={{ marginTop: 14 }}>
            Everything you&apos;re wondering, answered.
          </h2>
        </div>

        <div className="ecm-faq">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span className="ic" aria-hidden>+</span>
              </summary>
              <div className="a">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

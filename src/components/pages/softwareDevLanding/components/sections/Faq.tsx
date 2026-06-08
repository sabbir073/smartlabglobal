import { FAQS } from "../../data";

export default function Faq() {
  return (
    <section id="faq" className="swd-section swd-section--alt">
      <div className="swd-container" style={{ maxWidth: 860 }}>
        <div className="swd-head" style={{ marginBottom: 30 }}>
          <span className="swd-tag">FAQ</span>
          <h2 className="swd-h2" style={{ marginTop: 14 }}>
            Questions, answered.
          </h2>
        </div>

        <div className="swd-faq">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span className="plus" aria-hidden>+</span>
              </summary>
              <div className="ans">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FAQS } from "../../data";

export default function Faq() {
  return (
    <section id="faq" className="bot-section">
      <div className="bot-wrap">
        <div className="bot-head bot-center">
          <span className="bot-pill" style={{ marginInline: "auto" }}>FAQ</span>
          <h2 className="bot-h2" style={{ marginTop: 16 }}>
            Your questions, answered.
          </h2>
        </div>

        <div className="bot-faq">
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

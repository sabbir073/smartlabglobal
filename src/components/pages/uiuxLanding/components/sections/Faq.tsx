import { FAQS } from "../../data";

export default function Faq() {
  return (
    <section id="faq" className="ux-section">
      <div className="ux-wrap">
        <div className="ux-head ux-center">
          <span className="ux-tag" style={{ marginInline: "auto" }}><span className="dot" aria-hidden /> FAQ</span>
          <h2 className="ux-h2" style={{ marginTop: 16 }}>
            Good questions, clear answers.
          </h2>
        </div>

        <div className="ux-faq">
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

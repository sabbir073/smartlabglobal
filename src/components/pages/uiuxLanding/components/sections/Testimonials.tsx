import { TESTIMONIALS } from "../../data";

export default function Testimonials() {
  return (
    <section className="ux-section">
      <div className="ux-wrap">
        <div className="ux-head">
          <span className="ux-tag"><span className="dot" aria-hidden /> Kind words</span>
          <h2 className="ux-h2" style={{ marginTop: 16 }}>
            Teams that trusted us with their product.
          </h2>
        </div>

        <div className="ux-tst-grid">
          {TESTIMONIALS.map((t) => (
            <figure className="ux-tst" key={t.name}>
              <div className="q">“{t.quote}”</div>
              <figcaption className="who">
                <span className="av" aria-hidden>{t.name.charAt(0)}</span>
                <span>
                  <span className="nm" style={{ display: "block" }}>{t.name}</span>
                  <span className="rl">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

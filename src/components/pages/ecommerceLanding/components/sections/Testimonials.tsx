import { TESTIMONIALS } from "../../data";

export default function Testimonials() {
  return (
    <section className="ecm-section">
      <div className="ecm-wrap">
        <div className="ecm-head ecm-center">
          <span className="ecm-kicker">In their words</span>
          <h2 className="ecm-h2" style={{ marginTop: 14 }}>
            Trusted by founders across four markets.
          </h2>
        </div>

        <div className="ecm-tst-grid">
          {TESTIMONIALS.map((t) => (
            <figure className="ecm-card ecm-tst" key={t.name}>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption className="who">
                <div className="nm">{t.name}</div>
                <div className="rl">{t.role}</div>
                <div className="mk">{t.market}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

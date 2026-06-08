import { TESTIMONIALS } from "../../data";

export default function Testimonials() {
  return (
    <section className="bot-section">
      <div className="bot-wrap">
        <div className="bot-head">
          <span className="bot-pill">Customers</span>
          <h2 className="bot-h2" style={{ marginTop: 16 }}>
            Teams already letting AI take the first shift.
          </h2>
        </div>

        <div className="bot-tst-grid">
          {TESTIMONIALS.map((t) => (
            <figure className="bot-tst" key={t.name}>
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

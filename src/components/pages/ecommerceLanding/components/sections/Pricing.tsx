import { PRICING } from "../../data";

export default function Pricing() {
  return (
    <section id="pricing" className="ecm-section">
      <div className="ecm-wrap">
        <div className="ecm-head ecm-center">
          <span className="ecm-kicker">Engagement models</span>
          <h2 className="ecm-h2" style={{ marginTop: 14 }}>
            Transparent pricing, in your currency.
          </h2>
          <p className="ecm-lead ecm-center" style={{ marginTop: 14 }}>
            Anchors shown in USD with GBP, CAD and AUD equivalents. Final scope
            is always quoted to your project on the call.
          </p>
        </div>

        <div className="ecm-price-grid">
          {PRICING.map((p) => (
            <div className={`ecm-card ecm-price${p.featured ? " feat" : ""}`} key={p.name}>
              {p.featured && <span className="pop">Most popular</span>}
              <h3>{p.name}</h3>
              <div className="anchor">{p.anchor}</div>
              <div className="alt">{p.alt}</div>
              <div className="ideal">
                <strong style={{ color: "var(--ecm-ink)" }}>Ideal for:</strong> {p.ideal}
              </div>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a
                href="#book-call"
                className={`ecm-btn ${p.featured ? "ecm-btn-primary" : "ecm-btn-ghost"}`}
              >
                {p.name === "Custom Quote" ? "Get a custom quote" : "Book a free call"} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

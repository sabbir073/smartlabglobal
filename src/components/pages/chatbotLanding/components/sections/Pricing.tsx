import { PRICING } from "../../data";

export default function Pricing() {
  return (
    <section id="pricing" className="bot-section bot-section--alt">
      <div className="bot-wrap">
        <div className="bot-head bot-center">
          <span className="bot-pill" style={{ marginInline: "auto" }}>Pricing</span>
          <h2 className="bot-h2" style={{ marginTop: 16 }}>
            Simple plans that scale with you.
          </h2>
          <p className="bot-lead bot-center" style={{ marginTop: 14 }}>
            Start small and grow. Every plan includes a chatbot trained on your
            content and human hand-off. Final scope is confirmed on your demo call.
          </p>
        </div>

        <div className="bot-price-grid">
          {PRICING.map((p) => (
            <div className={`bot-price${p.featured ? " feat" : ""}`} key={p.name}>
              {p.featured && <span className="pop">Most popular</span>}
              <h3>{p.name}</h3>
              <div className={`anchor ${p.featured ? "bot-grad-text" : ""}`} style={!p.featured ? { color: "var(--bot-ink)" } : undefined}>
                {p.anchor}
              </div>
              <div className="ideal">
                <strong style={{ color: "var(--bot-ink)" }}>Best for:</strong> {p.ideal}
              </div>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a href="#book-call" className={`bot-btn ${p.featured ? "bot-btn-primary" : "bot-btn-ghost"}`}>
                {p.name === "Enterprise" ? "Talk to us" : "Get started"} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

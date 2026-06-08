import { RESULTS } from "../../data";

export default function Results() {
  return (
    <section id="results" className="ecm-section ecm-section--alt">
      <div className="ecm-wrap">
        <div className="ecm-head ecm-center">
          <span className="ecm-kicker">The proof</span>
          <h2 className="ecm-h2" style={{ marginTop: 14 }}>
            Real numbers from real brands.
          </h2>
          <p className="ecm-lead ecm-center" style={{ marginTop: 14 }}>
            We measure our work the way you do — in revenue, speed and retention.
          </p>
        </div>

        <div className="ecm-results">
          {RESULTS.map((r) => (
            <div className="ecm-card ecm-result" key={r.label}>
              <div className="v">{r.value}</div>
              <div className="l">{r.label}</div>
              <div className="s">{r.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

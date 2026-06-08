import { DIFFERENTIATORS } from "../../data";

export default function Differentiators() {
  return (
    <section className="ecm-section ecm-section--alt">
      <div className="ecm-wrap">
        <div className="ecm-head">
          <span className="ecm-kicker">Why brands choose us</span>
          <h2 className="ecm-h2" style={{ marginTop: 14 }}>
            On par with the best onshore agencies — without the onshore overheads.
          </h2>
        </div>

        <div className="ecm-diff-grid">
          {DIFFERENTIATORS.map((d) => (
            <div className="ecm-diff" key={d.title}>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

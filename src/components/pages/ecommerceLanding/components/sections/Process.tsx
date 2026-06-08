import { PROCESS } from "../../data";

export default function Process() {
  return (
    <section id="process" className="ecm-section">
      <div className="ecm-wrap">
        <div className="ecm-head">
          <span className="ecm-kicker">How we work</span>
          <h2 className="ecm-h2" style={{ marginTop: 14 }}>
            A clear, de-risked path from idea to launch.
          </h2>
        </div>

        <div className="ecm-proc">
          {PROCESS.map((p) => (
            <div className="ecm-card ecm-proc-item" key={p.step}>
              <div className="step">{p.step}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

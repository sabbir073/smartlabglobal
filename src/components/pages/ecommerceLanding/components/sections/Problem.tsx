import { PROBLEMS } from "../../data";

export default function Problem() {
  return (
    <section className="ecm-section ecm-section--alt">
      <div className="ecm-wrap">
        <div className="ecm-head">
          <span className="ecm-kicker">Sound familiar?</span>
          <h2 className="ecm-h2" style={{ marginTop: 14 }}>
            Your store should be your best salesperson — not your biggest leak.
          </h2>
        </div>

        <div className="ecm-prob-grid">
          {PROBLEMS.map((p) => (
            <article className="ecm-card ecm-prob" key={p.title}>
              <div className="ic" aria-hidden>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

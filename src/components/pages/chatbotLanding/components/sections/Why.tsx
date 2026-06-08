import { WHY } from "../../data";

export default function Why() {
  return (
    <section className="bot-section bot-section--alt">
      <div className="bot-wrap">
        <div className="bot-head">
          <span className="bot-pill">Why Smart Lab</span>
          <h2 className="bot-h2" style={{ marginTop: 16 }}>
            Powerful AI, fully under your control.
          </h2>
        </div>

        <div className="bot-why-grid">
          {WHY.map((w) => (
            <div className="bot-why" key={w.title}>
              <div className="ic" aria-hidden>{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

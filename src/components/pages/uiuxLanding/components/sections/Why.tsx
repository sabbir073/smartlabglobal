import { WHY } from "../../data";

export default function Why() {
  return (
    <section className="ux-section ux-section--alt">
      <div className="ux-wrap">
        <div className="ux-head">
          <span className="ux-tag"><span className="dot" aria-hidden /> Why work with us</span>
          <h2 className="ux-h2" style={{ marginTop: 16 }}>
            Thoughtful design, minus the agency drama.
          </h2>
        </div>

        <div className="ux-why-grid">
          {WHY.map((w) => (
            <div className="ux-why" key={w.title}>
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

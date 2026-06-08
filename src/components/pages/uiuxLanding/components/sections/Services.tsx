import { SERVICES } from "../../data";

export default function Services() {
  return (
    <section id="services" className="ux-section ux-section--alt">
      <div className="ux-wrap">
        <div className="ux-head">
          <span className="ux-tag"><span className="dot" aria-hidden /> What we do</span>
          <h2 className="ux-h2" style={{ marginTop: 16 }}>
            Design that works as good as it looks.
          </h2>
          <p className="ux-lead" style={{ marginTop: 16 }}>
            From first research to final handoff, we cover the full design
            lifecycle — so your product is desirable, usable and ready to build.
          </p>
        </div>

        <div className="ux-svc-grid">
          {SERVICES.map((s) => (
            <article className="ux-svc" key={s.no}>
              <div className="no">{s.no}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

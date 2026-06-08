import { SERVICES } from "../../data";

export default function Services() {
  return (
    <section id="services" className="swd-section">
      <div className="swd-container">
        <div className="swd-head">
          <span className="swd-tag">What We Build</span>
          <h2 className="swd-h2" style={{ marginTop: 14 }}>
            End-to-end software engineering, under one roof.
          </h2>
          <p className="swd-lead" style={{ marginTop: 16 }}>
            From the first wireframe to production at scale, our teams cover the
            full lifecycle — so you ship faster without stitching vendors together.
          </p>
        </div>

        <div className="swd-svc-grid">
          {SERVICES.map((s) => (
            <article className="swd-svc" key={s.no}>
              <span className="no">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.blurb}</p>
              <div className="swd-chips">
                {s.tags.map((t) => (
                  <span className="swd-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

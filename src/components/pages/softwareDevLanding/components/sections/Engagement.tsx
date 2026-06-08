import { ENGAGEMENTS } from "../../data";

export default function Engagement() {
  return (
    <section id="engagement" className="swd-section swd-section--alt">
      <div className="swd-container">
        <div className="swd-head">
          <span className="swd-tag">Engagement Models</span>
          <h2 className="swd-h2" style={{ marginTop: 14 }}>
            Work with us the way that fits your stage.
          </h2>
          <p className="swd-lead" style={{ marginTop: 16 }}>
            Whether you need a fixed-scope build, a long-term squad, or a few
            specialists to plug a gap — there&apos;s a model for it.
          </p>
        </div>

        <div className="swd-eng-grid">
          {ENGAGEMENTS.map((e) => (
            <div className={`swd-eng${e.featured ? " feat" : ""}`} key={e.name}>
              {e.featured && <span className="badge">Most popular</span>}
              <h3>{e.name}</h3>
              <div className="tl">{e.tagline}</div>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="best">
                <strong style={{ color: "var(--swd-ink)" }}>Best for:</strong> {e.best}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

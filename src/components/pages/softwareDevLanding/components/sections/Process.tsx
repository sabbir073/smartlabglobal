import { PROCESS } from "../../data";

export default function Process() {
  return (
    <section id="process" className="swd-section">
      <div className="swd-grid-bg" aria-hidden />
      <div className="swd-container">
        <div className="swd-head">
          <span className="swd-tag">How We Work</span>
          <h2 className="swd-h2" style={{ marginTop: 14 }}>
            A delivery process engineered to remove surprises.
          </h2>
          <p className="swd-lead" style={{ marginTop: 16 }}>
            Five disciplined phases. Working software at the end of every sprint,
            and a roadmap you approved before we started.
          </p>
        </div>

        <div className="swd-timeline" style={{ maxWidth: 880 }}>
          {PROCESS.map((p) => (
            <div className="swd-tl-item" key={p.step}>
              <div className="swd-tl-num">{p.step}</div>
              <div className="swd-tl-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

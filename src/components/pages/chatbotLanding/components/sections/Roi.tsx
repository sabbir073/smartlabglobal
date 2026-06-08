import { ROI } from "../../data";

export default function Roi() {
  return (
    <section className="bot-section">
      <div className="bot-mesh" aria-hidden />
      <div className="bot-wrap">
        <div className="bot-head bot-center">
          <span className="bot-pill" style={{ marginInline: "auto" }}>The impact</span>
          <h2 className="bot-h2" style={{ marginTop: 16 }}>
            Real results, around the clock.
          </h2>
        </div>

        <div className="bot-roi">
          {ROI.map((r) => (
            <div className="bot-roi-item" key={r.label}>
              <div className="v bot-grad-text">{r.value}</div>
              <div className="l">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { TOOLS } from "../../data";

export default function Tools() {
  return (
    <section className="ux-section ux-section--alt" style={{ paddingBlock: "clamp(44px,6vw,72px)" }}>
      <div className="ux-wrap ux-center">
        <span className="ux-tag"><span className="dot" aria-hidden /> Our toolkit</span>
        <div className="ux-tools" style={{ marginTop: 24 }}>
          {TOOLS.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

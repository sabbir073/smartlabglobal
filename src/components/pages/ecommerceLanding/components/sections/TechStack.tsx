import { TECH } from "../../data";

export default function TechStack() {
  return (
    <section className="ecm-section ecm-section--alt" style={{ paddingBlock: "clamp(44px,6vw,72px)" }}>
      <div className="ecm-wrap ecm-center">
        <span className="ecm-kicker">Built on best-in-class tools</span>
        <div className="ecm-tech" style={{ marginTop: 22 }}>
          {TECH.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

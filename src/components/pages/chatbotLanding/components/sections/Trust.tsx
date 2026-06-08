import { TRUST } from "../../data";

export default function Trust() {
  return (
    <section className="bot-section--alt" style={{ paddingBlock: 26, borderBlock: "1px solid var(--bot-line-soft)" }}>
      <div className="bot-wrap">
        <div className="bot-trust">
          {TRUST.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

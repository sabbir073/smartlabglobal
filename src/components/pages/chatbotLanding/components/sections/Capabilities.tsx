import { CAPABILITIES } from "../../data";

export default function Capabilities() {
  return (
    <section id="capabilities" className="bot-section">
      <div className="bot-mesh" aria-hidden />
      <div className="bot-wrap">
        <div className="bot-head">
          <span className="bot-pill">Capabilities</span>
          <h2 className="bot-h2" style={{ marginTop: 16 }}>
            Not a script. A genuinely smart assistant.
          </h2>
          <p className="bot-lead" style={{ marginTop: 16 }}>
            Trained on your business and grounded in your approved content — so it
            understands context and answers like your best team member.
          </p>
        </div>

        <div className="bot-bento">
          {CAPABILITIES.map((c) => (
            <article className={`bot-cap ${c.size}`} key={c.title}>
              <div className="ic" aria-hidden>{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

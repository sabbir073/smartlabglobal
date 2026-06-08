import { USE_CASES } from "../../data";

export default function UseCases() {
  return (
    <section id="use-cases" className="bot-section bot-section--alt">
      <div className="bot-wrap">
        <div className="bot-head">
          <span className="bot-pill">Use cases</span>
          <h2 className="bot-h2" style={{ marginTop: 16 }}>
            One assistant, endless jobs to be done.
          </h2>
        </div>

        <div className="bot-uc-grid">
          {USE_CASES.map((u) => (
            <article className="bot-uc" key={u.title}>
              <div className="ic" aria-hidden>{u.icon}</div>
              <h3>{u.title}</h3>
              <p>{u.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

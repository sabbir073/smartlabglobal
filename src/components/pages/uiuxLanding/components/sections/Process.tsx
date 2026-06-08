import { PROCESS } from "../../data";

export default function Process() {
  return (
    <section id="process" className="ux-section ux-section--alt">
      <div className="ux-wrap">
        <div className="ux-head">
          <span className="ux-tag"><span className="dot" aria-hidden /> Our process</span>
          <h2 className="ux-h2" style={{ marginTop: 16 }}>
            A proven path from idea to interface.
          </h2>
        </div>

        <div className="ux-proc">
          {PROCESS.map((p) => (
            <div className="ux-proc-item" key={p.step}>
              <div className="n">{p.step}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

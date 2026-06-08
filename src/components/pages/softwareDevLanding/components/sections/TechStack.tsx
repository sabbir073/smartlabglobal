import Image from "next/image";
import { STACK_GROUPS } from "../../data";

export default function TechStack() {
  return (
    <section id="stack" className="swd-section swd-section--alt">
      <div className="swd-container">
        <div className="swd-split">
          <div>
            <span className="swd-tag">The Stack</span>
            <h2 className="swd-h2" style={{ marginTop: 14 }}>
              Modern, battle-tested technology — chosen for the job, not the hype.
            </h2>
            <p className="swd-lead" style={{ marginTop: 16, marginBottom: 30 }}>
              We&apos;re stack-agnostic. Every technology decision is made against
              your scale, budget and team — then documented so nothing is a black box.
            </p>

            <div className="swd-stack-row">
              {STACK_GROUPS.map((g) => (
                <div className="swd-stack-col" key={g.group}>
                  <h4>{g.group}</h4>
                  <ul>
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <figure className="swd-figure" style={{ margin: 0 }}>
            <Image
              src="/landing/software/architecture.jpg"
              alt="Software engineers reviewing a system architecture diagram on a screen"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

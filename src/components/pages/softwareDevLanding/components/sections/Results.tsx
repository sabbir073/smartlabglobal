import Image from "next/image";
import { RESULTS } from "../../data";

export default function Results() {
  return (
    <section id="results" className="swd-section">
      <div className="swd-container">
        <div className="swd-split">
          <figure className="swd-figure" style={{ margin: 0 }}>
            <Image
              src="/landing/software/dashboard.jpg"
              alt="Analytics dashboard showing product performance metrics built by Smart Lab Global"
              width={1200}
              height={900}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </figure>

          <div>
            <span className="swd-tag">Outcomes</span>
            <h2 className="swd-h2" style={{ marginTop: 14 }}>
              We measure success in your numbers, not our hours.
            </h2>
            <p className="swd-lead" style={{ marginTop: 16, marginBottom: 30 }}>
              Custom software is an investment. We architect for return —
              faster launches, lower running costs, and systems that don&apos;t
              break when you grow.
            </p>

            <div className="swd-results">
              {RESULTS.map((r) => (
                <div className="swd-result" key={r.label}>
                  <div className="v">{r.value}</div>
                  <div className="l">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

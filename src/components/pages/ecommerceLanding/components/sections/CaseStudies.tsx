import Image from "next/image";
import { CASES } from "../../data";

export default function CaseStudies() {
  return (
    <section id="work" className="ecm-section">
      <div className="ecm-wrap">
        <div className="ecm-head">
          <span className="ecm-kicker">Featured work</span>
          <h2 className="ecm-h2" style={{ marginTop: 14 }}>
            Client → challenge → build → measurable result.
          </h2>
        </div>

        <div className="ecm-cases">
          {CASES.map((c) => (
            <article className="ecm-card ecm-case" key={c.client}>
              <div className="ecm-case-img">
                <span className="ecm-case-tag">{c.tag}</span>
                <Image
                  src={c.img}
                  alt={`${c.client} case study`}
                  width={1200}
                  height={800}
                  sizes="(max-width: 880px) 100vw, 50vw"
                />
              </div>
              <div className="ecm-case-body">
                <h3>{c.client}</h3>
                <div className="ecm-case-row">
                  <div className="k">The challenge</div>
                  <p>{c.challenge}</p>
                </div>
                <div className="ecm-case-row">
                  <div className="k">The build</div>
                  <p>{c.build}</p>
                </div>
                <div className="ecm-case-result">
                  <span className="big">{c.result}</span>
                  <span className="sm">{c.sub}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

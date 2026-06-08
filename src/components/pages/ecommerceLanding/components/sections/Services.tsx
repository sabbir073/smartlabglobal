import Image from "next/image";
import { SERVICES } from "../../data";

export default function Services() {
  return (
    <section id="services" className="ecm-section">
      <div className="ecm-wrap">
        <div className="ecm-head ecm-center">
          <span className="ecm-kicker">What we build</span>
          <h2 className="ecm-h2" style={{ marginTop: 14 }}>
            One team for your storefront, your app and everything behind it.
          </h2>
        </div>

        {SERVICES.map((s, idx) => (
          <div className={`ecm-svc${idx % 2 === 1 ? " rev" : ""}`} key={s.id}>
            <div className="ecm-svc-media">
              <Image
                src={s.img}
                alt={`${s.title} — example work by Smart Lab Global`}
                width={s.ratio[0]}
                height={s.ratio[1]}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="ecm-kicker">{s.kicker}</span>
              <h3>{s.title}</h3>
              <p className="ecm-lead" style={{ marginTop: 14 }}>
                {s.desc}
              </p>
              <ul className="pts">
                {s.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a href="#book-call" className="ecm-btn ecm-btn-ghost" style={{ marginTop: 24 }}>
                Discuss your project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

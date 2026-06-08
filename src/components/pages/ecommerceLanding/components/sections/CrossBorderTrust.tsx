import { TRUST_POINTS } from "../../data";

export default function CrossBorderTrust() {
  return (
    <section className="ecm-section ecm-section--alt">
      <div className="ecm-wrap">
        <div className="ecm-head">
          <span className="ecm-kicker">Working across borders</span>
          <h2 className="ecm-h2" style={{ marginTop: 14 }}>
            A remote partner that feels like it&apos;s down the street.
          </h2>
          <p className="ecm-lead" style={{ marginTop: 14 }}>
            Hiring an overseas team shouldn&apos;t mean compromising on trust,
            communication or ownership. Here&apos;s how we make it effortless.
          </p>
        </div>

        <div className="ecm-trust-grid">
          {TRUST_POINTS.map((t) => (
            <div className="ecm-card ecm-trust" key={t.title}>
              <span className="ic" aria-hidden>{t.icon}</span>
              <div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

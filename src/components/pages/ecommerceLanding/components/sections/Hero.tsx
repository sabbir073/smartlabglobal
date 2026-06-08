import Image from "next/image";
import { HERO_TRUST, MARKETS } from "../../data";

export default function Hero() {
  return (
    <section id="top" className="ecm-hero">
      <div className="ecm-wrap">
        <div className="ecm-hero-grid">
          <div>
            <span className="ecm-kicker" style={{ marginBottom: 18, display: "inline-flex" }}>
              E-commerce &amp; App Development
            </span>

            <h1 className="ecm-h1">
              Custom stores &amp; apps that <em>actually sell.</em>
            </h1>

            <p className="ecm-lead" style={{ marginTop: 22 }}>
              We design and build premium e-commerce storefronts and mobile apps
              for ambitious brands across the US, UK, Canada and Australia —
              engineered for speed, conversion and growth.
            </p>

            <div style={{ marginTop: 26, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="#book-call" className="ecm-btn ecm-btn-primary">
                Book a Free Strategy Call <span aria-hidden>→</span>
              </a>
              <a href="#work" className="ecm-btn ecm-btn-ghost">
                See our work
              </a>
            </div>

            <ul className="ecm-hero-trust" style={{ marginTop: 26 }}>
              {HERO_TRUST.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="ecm-markets" style={{ marginTop: 22 }}>
              {MARKETS.map((m) => (
                <span className="ecm-market-chip" key={m.name}>
                  <span aria-hidden>{m.flag}</span> {m.name}
                </span>
              ))}
            </div>
          </div>

          {/* Media: storefront photo with floating proof chips */}
          <div className="ecm-hero-media">
            <div className="main">
              <Image
                src="/landing/ecommerce/hero-store.jpg"
                alt="A premium custom e-commerce storefront shown on a laptop"
                width={1300}
                height={1000}
                priority
                sizes="(max-width: 960px) 100vw, 46vw"
              />
            </div>
            <div className="ecm-float ecm-float--tl">
              <span className="num">+38%</span>
              <span className="cap">avg. conversion<br />lift</span>
            </div>
            <div className="ecm-float ecm-float--br">
              <span className="num">1.8s</span>
              <span className="cap">mobile load<br />time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BRAND, TRUST_STATS } from "../../data";

export default function Hero() {
  return (
    <section id="top" className="swd-hero">
      <div className="swd-grid-bg" aria-hidden />
      <div className="swd-container">
        <div className="swd-hero-grid">
          <div>
            <p className="swd-coords" style={{ marginBottom: 18 }}>
              [ 40.7128° N · 74.0060° W ] — SMART LAB GLOBAL / ENGINEERING
            </p>
            <span className="swd-tag">Custom Software Development</span>

            <h1 className="swd-h1" style={{ marginTop: 18 }}>
              Software that{" "}
              <span className="swd-accent-text">scales</span> with your
              ambition.
            </h1>

            <p className="swd-lead" style={{ marginTop: 22 }}>
              We design, build and ship custom web applications, SaaS platforms
              and cloud systems for companies that have outgrown off-the-shelf
              tools. Senior engineers, agile delivery, code you own.
            </p>

            <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="#book-call" className="swd-btn swd-btn-primary">
                Book a Free Technical Call <span aria-hidden>→</span>
              </a>
              <a href="#services" className="swd-btn swd-btn-ghost">
                Explore Services
              </a>
            </div>

            <ul
              style={{
                marginTop: 30,
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 22px",
                listStyle: "none",
                color: "var(--swd-muted)",
                fontSize: 13.5,
              }}
            >
              <li className="swd-mono">✓ You own the IP</li>
              <li className="swd-mono">✓ NDA-protected</li>
              <li className="swd-mono">✓ Senior engineers only</li>
            </ul>
          </div>

          {/* Code window mock — decorative */}
          <div className="swd-code" aria-hidden>
            <div className="swd-code-bar">
              <i style={{ background: "#ff5a6b" }} />
              <i style={{ background: "#ffb454" }} />
              <i style={{ background: "#10f0a0" }} />
              <span className="swd-mono" style={{ marginLeft: 10, color: "#5d6675", fontSize: 12 }}>
                deploy.ts — main
              </span>
            </div>
            <div className="swd-code-body">
              <div><span className="ln">1</span><span className="k">import</span> {"{ build, ship }"} <span className="k">from</span> <span className="s">&quot;@smartlab/core&quot;</span>;</div>
              <div><span className="ln">2</span></div>
              <div><span className="ln">3</span><span className="c">// ship your product in weeks, not quarters</span></div>
              <div><span className="ln">4</span><span className="k">const</span> product = <span className="k">await</span> <span className="f">build</span>({"{"}</div>
              <div><span className="ln">5</span>{"  "}stack: <span className="s">&quot;next + node + postgres&quot;</span>,</div>
              <div><span className="ln">6</span>{"  "}cloud: <span className="s">&quot;aws&quot;</span>,</div>
              <div><span className="ln">7</span>{"  "}uptime: <span className="s">&quot;99.95%&quot;</span>,</div>
              <div><span className="ln">8</span>{"}"});</div>
              <div><span className="ln">9</span></div>
              <div><span className="ln">10</span><span className="k">await</span> <span className="f">ship</span>(product); <span className="c">// ✓ zero downtime</span></div>
            </div>
          </div>
        </div>

        {/* Trust stats */}
        <div className="swd-stats" style={{ marginTop: 56 }}>
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="swd-stat">
              <div className="v">{s.value}</div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

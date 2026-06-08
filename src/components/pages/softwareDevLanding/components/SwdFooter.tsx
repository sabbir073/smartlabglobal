import { BRAND, FOOTER_LINKS } from "../data";

export default function SwdFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="swd-footer">
      <div className="swd-container">
        <div className="swd-foot-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span className="swd-brand-mark">S</span>
              <span style={{ color: "#fff", fontWeight: 700, letterSpacing: "-0.02em" }}>
                {BRAND.name}
              </span>
            </div>
            <p style={{ color: "#8e97a6", fontSize: 14.5, lineHeight: 1.65, maxWidth: "42ch" }}>
              Engineering-grade custom software, SaaS platforms and cloud systems —
              built by senior teams that ship reliable products and stay for the long run.
            </p>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 6 }}>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </div>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h5>{col.heading}</h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 40,
            paddingTop: 22,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            color: "#7d8696",
            fontSize: 13,
          }}
        >
          <span>© {year} {BRAND.name}. All rights reserved.</span>
          <span className="swd-mono">Custom Software Development</span>
        </div>
      </div>
    </footer>
  );
}

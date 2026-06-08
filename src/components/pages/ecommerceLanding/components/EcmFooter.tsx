import { BRAND, FOOTER_LINKS, MARKETS } from "../data";

export default function EcmFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="ecm-footer">
      <div className="ecm-wrap">
        <div className="ecm-foot-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span className="ecm-brand-mark">S</span>
              <span style={{ fontFamily: "var(--ecm-display)", fontWeight: 700, color: "var(--ecm-ink)" }}>
                {BRAND.name}
              </span>
            </div>
            <p style={{ color: "var(--ecm-muted)", fontSize: 14.5, lineHeight: 1.65, maxWidth: "40ch" }}>
              Premium custom e-commerce stores and applications for ambitious brands across the US, UK, Canada and Australia — delivered to international standards.
            </p>
            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {MARKETS.map((m) => (
                <span key={m.name} style={{ fontSize: 13, color: "var(--ecm-text)" }} title={m.name}>
                  {m.flag}
                </span>
              ))}
            </div>
            <a href={`mailto:${BRAND.email}`} style={{ display: "inline-block", marginTop: 14, color: "var(--ecm-accent)", fontWeight: 600, fontSize: 14.5, textDecoration: "none" }}>
              {BRAND.email}
            </a>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h5>{col.heading}</h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
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
            marginTop: 38,
            paddingTop: 20,
            borderTop: "1px solid var(--ecm-line)",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            color: "var(--ecm-faint)",
            fontSize: 13,
          }}
        >
          <span>© {year} {BRAND.name}. You own 100% of the code we build.</span>
          <span>Serving 🇺🇸 🇬🇧 🇨🇦 🇦🇺</span>
        </div>
      </div>
    </footer>
  );
}

import { BRAND, FOOTER_LINKS } from "../data";

export default function UxFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="ux-footer">
      <div className="ux-wrap">
        <div className="ux-foot-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span className="ux-brand-mark">S</span>
              <span style={{ fontFamily: "var(--ux-display)", fontWeight: 700, color: "#fff" }}>
                {BRAND.name}
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14.5, lineHeight: 1.65, maxWidth: "40ch" }}>
              A product design studio crafting intuitive, beautiful and accessible
              interfaces — from first research to developer-ready handoff.
            </p>
            <a href={`mailto:${BRAND.email}`} style={{ display: "inline-block", marginTop: 16, color: "var(--ux-accent)", fontWeight: 600, fontSize: 14.5, textDecoration: "none" }}>
              {BRAND.email}
            </a>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h5>{col.heading}</h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
                {col.links.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
          <span>© {year} {BRAND.name}. All rights reserved.</span>
          <span>UI/UX Design Studio</span>
        </div>
      </div>
    </footer>
  );
}

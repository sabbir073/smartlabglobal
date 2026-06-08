import { BRAND, FOOTER_LINKS } from "../data";

export default function BotFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bot-footer">
      <div className="bot-wrap">
        <div className="bot-foot-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span className="bot-brand-mark">S</span>
              <span style={{ fontFamily: "var(--bot-display)", fontWeight: 700, color: "var(--bot-ink)" }}>
                {BRAND.name}
              </span>
            </div>
            <p style={{ color: "var(--bot-muted)", fontSize: 14.5, lineHeight: 1.65, maxWidth: "40ch" }}>
              Custom AI chatbots trained on your business — answering customers,
              capturing leads and supporting your team, 24/7 across every channel.
            </p>
            <a href={`mailto:${BRAND.email}`} style={{ display: "inline-block", marginTop: 16, color: "var(--bot-accent)", fontWeight: 600, fontSize: 14.5, textDecoration: "none" }}>
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

        <div style={{ marginTop: 40, paddingTop: 22, borderTop: "1px solid var(--bot-line)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", color: "var(--bot-faint)", fontSize: 13 }}>
          <span>© {year} {BRAND.name}. All rights reserved.</span>
          <span>Custom AI Chatbots</span>
        </div>
      </div>
    </footer>
  );
}

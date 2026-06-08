"use client";

import { useState } from "react";
import { BRAND, MARKETS } from "../../data";

/**
 * Primary conversion section (PRD §8.5): qualifying multi-field form
 * (incl. Country/Market + Budget range) + a time-zone-aware calendar mock.
 * Front-end only — submit is a local handler; wire to a real lead/CRM route.
 */
export default function BookCall() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    // eslint-disable-next-line no-console
    console.log("[ecommerce-lead]", Object.fromEntries(fd.entries()));
    setTimeout(() => setStatus("ok"), 600);
  }

  return (
    <section id="book-call" className="ecm-section">
      <div className="ecm-wrap">
        <div className="ecm-head" style={{ maxWidth: 760 }}>
          <span className="ecm-kicker">Let&apos;s talk</span>
          <h2 className="ecm-h2" style={{ marginTop: 14 }}>
            Book a free, no-obligation strategy call.
          </h2>
          <p className="ecm-lead" style={{ marginTop: 14 }}>
            Tell us about your store or app idea. You&apos;ll get a straight answer
            on approach, timeline and budget — in your time zone, within one
            business day. No pitch, no spam.
          </p>
        </div>

        <div className="ecm-book">
          {/* Qualifying form */}
          <div className="ecm-card" style={{ padding: "30px 28px" }}>
            {status === "ok" ? (
              <div style={{ padding: "16px 4px" }}>
                <div style={{ fontFamily: "var(--ecm-display)", fontSize: 24, fontWeight: 700, color: "var(--ecm-ink)" }}>
                  Thanks — we&apos;re on it. 🎉
                </div>
                <p style={{ color: "var(--ecm-muted)", marginTop: 10, fontSize: 15.5, lineHeight: 1.6 }}>
                  A senior member of our team will reply within one business day,
                  in your time zone. Talk soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
                  <div className="ecm-field">
                    <label htmlFor="name">Name *</label>
                    <input id="name" name="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="ecm-field">
                    <label htmlFor="email">Work email *</label>
                    <input id="email" name="email" type="email" required placeholder="jane@brand.com" />
                  </div>
                </div>

                <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
                  <div className="ecm-field">
                    <label htmlFor="company">Company / website</label>
                    <input id="company" name="company" placeholder="brand.com" />
                  </div>
                  <div className="ecm-field">
                    <label htmlFor="market">Country / market *</label>
                    <select id="market" name="market" required defaultValue="">
                      <option value="" disabled>Select…</option>
                      {MARKETS.map((m) => (
                        <option key={m.name} value={m.name}>{m.name}</option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
                  <div className="ecm-field">
                    <label htmlFor="type">Project type *</label>
                    <select id="type" name="type" required defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option value="ecommerce">E-commerce store</option>
                      <option value="mobile">Mobile app</option>
                      <option value="webapp">Web application</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div className="ecm-field">
                    <label htmlFor="budget">Budget range *</label>
                    <select id="budget" name="budget" required defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option value="lt-10k">Under $10k</option>
                      <option value="10-25k">$10k – $25k</option>
                      <option value="25-75k">$25k – $75k</option>
                      <option value="75k+">$75k+</option>
                    </select>
                  </div>
                </div>

                <div className="ecm-field">
                  <label htmlFor="message">What are you building?</label>
                  <textarea id="message" name="message" placeholder="A quick line about your store or app and what success looks like…" />
                </div>

                <button type="submit" className="ecm-btn ecm-btn-primary" disabled={status === "sending"} style={{ width: "100%" }}>
                  {status === "sending" ? "Sending…" : "Book My Free Call →"}
                </button>
                <p style={{ fontSize: 12.5, color: "var(--ecm-faint)" }}>
                  🔒 We respond within one business day. No spam, ever. Your details
                  stay private and you can opt out anytime.
                </p>
              </form>
            )}
          </div>

          {/* Time-zone-aware calendar mock */}
          <div className="ecm-card ecm-cal">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--ecm-display)", fontWeight: 700, color: "var(--ecm-ink)", fontSize: 18 }}>
                Pick a 30-min slot
              </span>
              <span style={{ fontSize: 12.5, color: "#0f9d6c", fontWeight: 600 }}>● live</span>
            </div>
            <p style={{ color: "var(--ecm-muted)", fontSize: 13.5, marginTop: 6 }}>
              Shown in your local time zone · next 7 days
            </p>

            <div className="ecm-cal-grid">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <div key={d + i} className="ecm-cal-cell dow">{d}</div>
              ))}
              {Array.from({ length: 28 }).map((_, i) => {
                const open = i > 2 && (i * 3) % 5 !== 0;
                return (
                  <div key={i} className={`ecm-cal-cell ${open ? "open" : "closed"}`}>
                    {i + 1}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "auto", display: "grid", gap: 8 }}>
              {["Tue · 10:30", "Wed · 14:00", "Fri · 09:00"].map((s) => (
                <button key={s} type="button" className="ecm-slot">
                  <span>{s}</span>
                  <span style={{ color: "var(--ecm-accent)", fontWeight: 600 }}>Book →</span>
                </button>
              ))}
            </div>

            <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--ecm-line)", fontSize: 13, color: "var(--ecm-muted)", display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
              {MARKETS.map((m) => (
                <span key={m.name}>{m.flag} {m.zone}</span>
              ))}
            </div>
            <div style={{ marginTop: 12, textAlign: "center", fontSize: 13, color: "var(--ecm-muted)" }}>
              Prefer email?{" "}
              <a href={`mailto:${BRAND.email}`} style={{ color: "var(--ecm-accent)", fontWeight: 600 }}>
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

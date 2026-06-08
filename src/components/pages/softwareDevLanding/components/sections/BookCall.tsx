"use client";

import { useState } from "react";
import { BRAND } from "../../data";

/**
 * Booking section — inline lead form (Path A) + a calendar/slot picker
 * mock (Path B), mirroring the /shopify pattern. Front-end only:
 * submit is a local handler. Wire to a real /api/lead route before launch.
 */
export default function BookCall() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    // eslint-disable-next-line no-console
    console.log("[software-lead]", Object.fromEntries(fd.entries()));
    setTimeout(() => setStatus("ok"), 600);
  }

  return (
    <section id="book-call" className="swd-section">
      <div className="swd-grid-bg" aria-hidden />
      <div className="swd-container">
        <div className="swd-head" style={{ maxWidth: 760, marginBottom: 38 }}>
          <span className="swd-tag">Talk To An Engineer</span>
          <h2 className="swd-h2" style={{ marginTop: 14 }}>
            Tell us what you&apos;re building.
          </h2>
          <p className="swd-lead" style={{ marginTop: 16 }}>
            A free 30-minute technical call — no sales pitch. You&apos;ll get a
            straight answer on feasibility, approach and rough timeline.
          </p>
        </div>

        <div className="swd-book">
          {/* Form */}
          <div className="swd-card" style={{ padding: "28px 26px" }}>
            {status === "ok" ? (
              <div style={{ padding: "20px 4px" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "var(--swd-ink)", letterSpacing: "-0.02em" }}>
                  ✓ Request received.
                </div>
                <p style={{ color: "var(--swd-muted)", marginTop: 10, fontSize: 15.5, lineHeight: 1.6 }}>
                  A senior engineer will reply within one business day — usually
                  much sooner. Talk soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
                  <div className="swd-field">
                    <label htmlFor="name">Full name *</label>
                    <input id="name" name="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="swd-field">
                    <label htmlFor="email">Work email *</label>
                    <input id="email" name="email" type="email" required placeholder="jane@company.com" />
                  </div>
                </div>

                <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
                  <div className="swd-field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" placeholder="Acme Inc." />
                  </div>
                  <div className="swd-field">
                    <label htmlFor="budget">Budget range</label>
                    <select id="budget" name="budget" defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option value="lt-25k">Under $25K</option>
                      <option value="25-75k">$25K – $75K</option>
                      <option value="75-200k">$75K – $200K</option>
                      <option value="gt-200k">$200K+</option>
                    </select>
                  </div>
                </div>

                <div className="swd-field">
                  <label htmlFor="project">What do you want to build? *</label>
                  <textarea id="project" name="project" required placeholder="e.g. a multi-tenant SaaS for field service teams, integrating with our CRM…" />
                </div>

                <button type="submit" className="swd-btn swd-btn-primary" disabled={status === "sending"} style={{ justifyContent: "center" }}>
                  {status === "sending" ? "Sending…" : "Request My Free Call →"}
                </button>
                <p className="swd-mono" style={{ fontSize: 12, color: "var(--swd-faint)" }}>
                  🔒 NDA on request. We never share your details.
                </p>
              </form>
            )}
          </div>

          {/* Calendar / slot picker */}
          <div className="swd-cal">
            <div className="swd-mono" style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--swd-muted)" }}>
              <span>cal.smartlab / discovery</span>
              <span style={{ color: "#10b981" }}>● open</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: 19, color: "var(--swd-ink)", marginTop: 12, letterSpacing: "-0.02em" }}>
              Pick a 30-min slot
            </div>
            <p style={{ color: "var(--swd-muted)", fontSize: 13.5, marginTop: 4 }}>
              Next 7 days · timezone auto-detected
            </p>

            <div className="swd-cal-grid">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <div key={d + i} className="swd-cal-cell dow">{d}</div>
              ))}
              {Array.from({ length: 28 }).map((_, i) => {
                const open = i > 2 && (i * 5) % 4 !== 0;
                return (
                  <div key={i} className={`swd-cal-cell ${open ? "open" : "closed"}`}>
                    {i + 1}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "auto", display: "grid", gap: 8 }}>
              {["Tue · 10:30 AM", "Wed · 2:00 PM", "Fri · 9:00 AM"].map((s) => (
                <button key={s} type="button" className="swd-slot">
                  <span>{s}</span>
                  <span style={{ color: "var(--swd-accent)" }}>Book →</span>
                </button>
              ))}
            </div>

            <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--swd-line)", fontSize: 13, color: "var(--swd-muted)", textAlign: "center" }}>
              Prefer email?{" "}
              <a href={`mailto:${BRAND.email}`} style={{ color: "var(--swd-accent)" }}>
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

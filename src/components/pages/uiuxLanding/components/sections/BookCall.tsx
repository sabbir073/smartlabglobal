"use client";

import { useState } from "react";
import { BRAND } from "../../data";

/**
 * Booking section — project brief form + calendar/slot mock.
 * Front-end only; submit logs locally. Wire to a real lead/CRM route.
 */
export default function BookCall() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    // eslint-disable-next-line no-console
    console.log("[uiux-lead]", Object.fromEntries(fd.entries()));
    setTimeout(() => setStatus("ok"), 600);
  }

  return (
    <section id="book-call" className="ux-section ux-section--alt">
      <div className="ux-wrap">
        <div className="ux-head" style={{ maxWidth: 760 }}>
          <span className="ux-tag"><span className="dot" aria-hidden /> Let&apos;s design</span>
          <h2 className="ux-h2" style={{ marginTop: 16 }}>
            Tell us about your product.
          </h2>
          <p className="ux-lead" style={{ marginTop: 14 }}>
            Book a free design consultation. We&apos;ll talk through your goals and
            show you how we&apos;d approach the work — no pitch, no pressure.
          </p>
        </div>

        <div className="ux-book">
          <div className="ux-card" style={{ padding: "30px 28px" }}>
            {status === "ok" ? (
              <div style={{ padding: "16px 4px" }}>
                <div style={{ fontFamily: "var(--ux-display)", fontSize: 24, fontWeight: 700, color: "var(--ux-ink)" }}>
                  Brilliant — got it. ✨
                </div>
                <p style={{ color: "var(--ux-muted)", marginTop: 10, fontSize: 15.5, lineHeight: 1.6 }}>
                  A designer will get back to you within one business day to set up
                  your free consultation. Talk soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
                  <div className="ux-field">
                    <label htmlFor="name">Name *</label>
                    <input id="name" name="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="ux-field">
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required placeholder="jane@company.com" />
                  </div>
                </div>

                <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
                  <div className="ux-field">
                    <label htmlFor="type">Project type</label>
                    <select id="type" name="type" defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option value="web">Web app design</option>
                      <option value="mobile">Mobile app design</option>
                      <option value="system">Design system</option>
                      <option value="audit">UX audit / research</option>
                    </select>
                  </div>
                  <div className="ux-field">
                    <label htmlFor="stage">Stage</label>
                    <select id="stage" name="stage" defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option value="idea">Just an idea</option>
                      <option value="existing">Improving an existing product</option>
                      <option value="rebrand">Redesign / rebrand</option>
                    </select>
                  </div>
                </div>

                <div className="ux-field">
                  <label htmlFor="brief">Tell us about your project</label>
                  <textarea id="brief" name="brief" placeholder="What are you building, who's it for, and what does success look like?" />
                </div>

                <button type="submit" className="ux-btn ux-btn-primary" disabled={status === "sending"} style={{ width: "100%" }}>
                  {status === "sending" ? "Sending…" : "Book My Free Consultation →"}
                </button>
                <p style={{ fontSize: 12.5, color: "var(--ux-faint)" }}>
                  🔒 We reply within one business day. No spam, ever.
                </p>
              </form>
            )}
          </div>

          <div className="ux-card ux-cal">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--ux-display)", fontWeight: 700, color: "var(--ux-ink)", fontSize: 18 }}>
                Pick a 30-min slot
              </span>
              <span style={{ fontSize: 12.5, color: "#00b894", fontWeight: 600 }}>● open</span>
            </div>
            <p style={{ color: "var(--ux-muted)", fontSize: 13.5, marginTop: 6 }}>
              In your local time zone · next 7 days
            </p>

            <div className="ux-cal-grid">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <div key={d + i} className="ux-cal-cell dow">{d}</div>
              ))}
              {Array.from({ length: 28 }).map((_, i) => {
                const open = i > 2 && (i * 4) % 5 !== 0;
                return (
                  <div key={i} className={`ux-cal-cell ${open ? "open" : "closed"}`}>
                    {i + 1}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "auto", display: "grid", gap: 8 }}>
              {["Mon · 11:00", "Thu · 15:30", "Fri · 10:00"].map((s) => (
                <button key={s} type="button" className="ux-slot">
                  <span>{s}</span>
                  <span style={{ color: "var(--ux-accent)", fontWeight: 600 }}>Book →</span>
                </button>
              ))}
            </div>

            <div style={{ marginTop: 14, textAlign: "center", fontSize: 13, color: "var(--ux-muted)" }}>
              Prefer email?{" "}
              <a href={`mailto:${BRAND.email}`} style={{ color: "var(--ux-accent)", fontWeight: 600 }}>
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

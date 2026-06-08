"use client";

import { useState } from "react";
import { BRAND } from "../../data";

/**
 * Booking section — demo-request form + calendar/slot mock.
 * Front-end only; submit logs locally. Wire to a real lead/CRM route.
 */
export default function BookCall() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    // eslint-disable-next-line no-console
    console.log("[chatbot-lead]", Object.fromEntries(fd.entries()));
    setTimeout(() => setStatus("ok"), 600);
  }

  return (
    <section id="book-call" className="bot-section bot-section--alt">
      <div className="bot-wrap">
        <div className="bot-head" style={{ maxWidth: 760 }}>
          <span className="bot-pill">Get started</span>
          <h2 className="bot-h2" style={{ marginTop: 16 }}>
            See your own AI chatbot in action.
          </h2>
          <p className="bot-lead" style={{ marginTop: 14 }}>
            Book a free demo and we&apos;ll show you a chatbot trained on your
            content — answering your real questions live. No commitment, no spam.
          </p>
        </div>

        <div className="bot-book">
          <div className="bot-card" style={{ padding: "30px 28px" }}>
            {status === "ok" ? (
              <div style={{ padding: "16px 4px" }}>
                <div style={{ fontFamily: "var(--bot-display)", fontSize: 24, fontWeight: 700, color: "var(--bot-ink)" }}>
                  You&apos;re all set. 🚀
                </div>
                <p style={{ color: "var(--bot-muted)", marginTop: 10, fontSize: 15.5, lineHeight: 1.6 }}>
                  We&apos;ll be in touch within one business day to schedule your live
                  demo. Talk soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
                  <div className="bot-field">
                    <label htmlFor="name">Name *</label>
                    <input id="name" name="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="bot-field">
                    <label htmlFor="email">Work email *</label>
                    <input id="email" name="email" type="email" required placeholder="jane@company.com" />
                  </div>
                </div>

                <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
                  <div className="bot-field">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" placeholder="company.com" />
                  </div>
                  <div className="bot-field">
                    <label htmlFor="usecase">Main use case</label>
                    <select id="usecase" name="usecase" defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option value="support">Customer support</option>
                      <option value="sales">Sales & lead-gen</option>
                      <option value="ecommerce">E-commerce assistant</option>
                      <option value="internal">Internal helpdesk</option>
                    </select>
                  </div>
                </div>

                <div className="bot-field">
                  <label htmlFor="message">Anything we should know?</label>
                  <textarea id="message" name="message" placeholder="What would you want the chatbot to handle first?" />
                </div>

                <button type="submit" className="bot-btn bot-btn-primary" disabled={status === "sending"} style={{ width: "100%" }}>
                  {status === "sending" ? "Sending…" : "Book My Free Demo →"}
                </button>
                <p style={{ fontSize: 12.5, color: "var(--bot-faint)" }}>
                  🔒 We reply within one business day. Your data stays private.
                </p>
              </form>
            )}
          </div>

          <div className="bot-card bot-cal">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--bot-display)", fontWeight: 700, color: "var(--bot-ink)", fontSize: 18 }}>
                Pick a 30-min slot
              </span>
              <span style={{ fontSize: 12.5, color: "#10b981", fontWeight: 600 }}>● open</span>
            </div>
            <p style={{ color: "var(--bot-muted)", fontSize: 13.5, marginTop: 6 }}>
              In your local time zone · next 7 days
            </p>

            <div className="bot-cal-grid">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <div key={d + i} className="bot-cal-cell dow">{d}</div>
              ))}
              {Array.from({ length: 28 }).map((_, i) => {
                const open = i > 2 && (i * 2) % 5 !== 0;
                return (
                  <div key={i} className={`bot-cal-cell ${open ? "open" : "closed"}`}>
                    {i + 1}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "auto", display: "grid", gap: 8 }}>
              {["Tue · 13:00", "Wed · 16:30", "Fri · 11:00"].map((s) => (
                <button key={s} type="button" className="bot-slot">
                  <span>{s}</span>
                  <span style={{ color: "var(--bot-accent)", fontWeight: 600 }}>Book →</span>
                </button>
              ))}
            </div>

            <div style={{ marginTop: 14, textAlign: "center", fontSize: 13, color: "var(--bot-muted)" }}>
              Prefer email?{" "}
              <a href={`mailto:${BRAND.email}`} style={{ color: "var(--bot-accent)", fontWeight: 600 }}>
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

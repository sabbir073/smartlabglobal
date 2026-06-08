"use client";

import { useState } from "react";
import { BRAND } from "../../data";

/**
 * Final CTA — two-path conversion: inline form (Path A) + calendar placeholder (Path B).
 * v1: form is a dummy console.log handler. Replace with real API in production.
 */
export default function FinalCta() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    // TODO: replace with real /api/lead route or server action
    // eslint-disable-next-line no-console
    console.log("[shopify-lead]", payload);
    setTimeout(() => setStatus("ok"), 600);
  }

  return (
    <section id="book-call" className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="relative max-w-[1200px] mx-auto">
        <div
          className="sl-glass sl-ring relative overflow-hidden p-6 md:p-12"
          style={{ borderRadius: "var(--sl-r-2xl)" }}
        >
          <div className="sl-aurora" aria-hidden />

          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10">
            {/* Left: form */}
            <div>
              <p
                className="sl-mono text-sm mb-4"
                style={{ color: "var(--sl-accent-primary-soft)" }}
              >
                11 — TALK TO US
              </p>
              <h2 className="sl-display text-white text-[34px] md:text-[48px]">
                Ready to make your Shopify store{" "}
                <span className="sl-grad-text">actually print money?</span>
              </h2>
              <p
                className="mt-4 text-lg"
                style={{ color: "var(--sl-text-secondary)" }}
              >
                Free 30-minute strategy call. No pitch, no pressure.
              </p>

              {status === "ok" ? (
                <div
                  className="mt-8 p-6 rounded-2xl"
                  style={{
                    background: "rgba(16,240,160,0.08)",
                    border: "1px solid rgba(16,240,160,0.3)",
                  }}
                >
                  <div
                    className="font-semibold text-white text-lg mb-1"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    🎉 Got it.
                  </div>
                  <p style={{ color: "var(--sl-text-secondary)" }}>
                    Check your inbox in ~2 minutes — first response is from a
                    real human, not a bot.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid gap-3">
                  <Field name="name" label="Your name" placeholder="Aarav P." required />
                  <Field name="email" label="Work email" type="email" placeholder="you@brand.com" required />
                  <Field name="store" label="Store URL" placeholder="brand.com" />
                  <div>
                    <label
                      className="block text-[12px] mb-1.5 sl-mono"
                      style={{ color: "var(--sl-text-muted)" }}
                    >
                      Monthly revenue
                    </label>
                    <select
                      name="revenue"
                      defaultValue=""
                      style={selectStyle}
                      required
                    >
                      <option value="" disabled>Select a range</option>
                      <option value="lt-10k">Less than $10K / mo</option>
                      <option value="10k-50k">$10K – $50K / mo</option>
                      <option value="50k-250k">$50K – $250K / mo</option>
                      <option value="250k-1m">$250K – $1M / mo</option>
                      <option value="gt-1m">$1M+ / mo</option>
                    </select>
                  </div>
                  <Field
                    name="challenge"
                    label="Biggest challenge right now"
                    placeholder="e.g. mobile CR is terrible and ads are unprofitable"
                    textarea
                  />

                  <button
                    type="submit"
                    className="sl-btn-primary mt-2 w-full"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Get My Free Audit →"}
                  </button>
                  <p
                    className="text-[12px] mt-1"
                    style={{ color: "var(--sl-text-muted)" }}
                  >
                    🔒 GDPR safe. No spam. Promise.
                  </p>
                </form>
              )}
            </div>

            {/* Right: calendar placeholder */}
            <div>
              <div
                className="sl-glass p-6 h-full flex flex-col"
                style={{
                  borderRadius: "var(--sl-r-xl)",
                  background: "var(--sl-surface-1)",
                }}
              >
                <div
                  className="flex items-center justify-between mb-4 sl-mono text-[12px]"
                  style={{ color: "var(--sl-text-muted)" }}
                >
                  <span>cal.smartlab / discovery</span>
                  <span style={{ color: "var(--sl-success)" }}>● live</span>
                </div>
                <div
                  className="font-semibold text-white text-xl mb-1"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Pick a 30-min slot
                </div>
                <p
                  className="text-sm mb-5"
                  style={{ color: "var(--sl-text-muted)" }}
                >
                  Next 7 days. Reschedule anytime.
                </p>

                <div className="grid grid-cols-7 gap-1 text-center mb-5">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <div
                      key={d + i}
                      className="sl-mono text-[10px] py-1"
                      style={{ color: "var(--sl-text-faint)" }}
                    >
                      {d}
                    </div>
                  ))}
                  {Array.from({ length: 28 }).map((_, i) => {
                    const slotsLeft = (i * 7) % 4;
                    const open = slotsLeft > 0 && i > 2;
                    return (
                      <div
                        key={i}
                        className="aspect-square rounded-md grid place-items-center sl-mono text-[12px]"
                        style={{
                          background: open
                            ? "rgba(255,67,6,0.10)"
                            : "var(--sl-surface-1)",
                          color: open
                            ? "var(--sl-accent-primary-soft)"
                            : "var(--sl-text-faint)",
                          border: open
                            ? "1px solid rgba(255,67,6,0.25)"
                            : "1px solid transparent",
                        }}
                      >
                        {i + 1}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-auto grid gap-2">
                  {["Tue 10:30 AM", "Wed 2:00 PM", "Fri 9:00 AM"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="text-left p-3 rounded-xl flex justify-between items-center"
                      style={{
                        background: "rgba(255,67,6,0.05)",
                        border: "1px solid rgba(255,67,6,0.18)",
                        color: "var(--sl-text-primary)",
                        cursor: "pointer",
                      }}
                    >
                      <span className="sl-mono text-[13px]">{s}</span>
                      <span
                        className="sl-mono text-[11px]"
                        style={{ color: "var(--sl-accent-primary-soft)" }}
                      >
                        Book →
                      </span>
                    </button>
                  ))}
                </div>

                <div
                  className="mt-4 pt-4 text-center text-[12px]"
                  style={{
                    borderTop: "1px solid var(--sl-border-glass)",
                    color: "var(--sl-text-muted)",
                  }}
                >
                  Or{" "}
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}`}
                    style={{ color: "var(--sl-success)" }}
                  >
                    WhatsApp us →
                  </a>{" "}
                  ·{" "}
                  <a
                    href={`mailto:${BRAND.email}`}
                    style={{ color: "var(--sl-accent-primary-soft)" }}
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const selectStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  background: "var(--sl-surface-1)",
  border: "1px solid var(--sl-border-glass)",
  color: "var(--sl-text-primary)",
  fontSize: 15,
  outline: "none",
};

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const sharedStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    background: "var(--sl-surface-1)",
    border: "1px solid var(--sl-border-glass)",
    color: "var(--sl-text-primary)",
    fontSize: 15,
    outline: "none",
    resize: textarea ? "vertical" : undefined,
    minHeight: textarea ? 96 : 56,
    fontFamily: "inherit",
  };
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[12px] mb-1.5 sl-mono"
        style={{ color: "var(--sl-text-muted)" }}
      >
        {label} {required && <span style={{ color: "var(--sl-accent-primary-soft)" }}>*</span>}
      </label>
      {textarea ? (
        <textarea id={name} name={name} placeholder={placeholder} required={required} style={sharedStyle} />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          style={sharedStyle}
        />
      )}
    </div>
  );
}

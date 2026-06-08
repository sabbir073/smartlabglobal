"use client";

/**
 * Newsletter form for the Shopify footer.
 * Lives in its own client component so the parent footer can stay server-rendered.
 * v1: just prevents default. Wire to your ESP (Klaviyo/Mailchimp) in production.
 */
export default function NewsletterForm() {
  return (
    <form
      className="mt-5 flex"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: replace with real subscribe endpoint
      }}
      aria-label="Newsletter signup"
    >
      <input
        type="email"
        placeholder="you@brand.com"
        aria-label="Email"
        style={{
          flex: 1,
          padding: "12px 14px",
          borderRadius: "9999px 0 0 9999px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid var(--sl-border-glass)",
          borderRight: "none",
          color: "var(--sl-text-primary)",
          fontSize: 14,
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0 18px",
          borderRadius: "0 9999px 9999px 0",
          background:
            "linear-gradient(120deg, var(--sl-accent-primary), var(--sl-accent-primary-soft))",
          color: "#fff",
          fontWeight: 600,
          fontSize: 13,
          border: "none",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>
    </form>
  );
}

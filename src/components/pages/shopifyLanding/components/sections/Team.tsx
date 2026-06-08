import { TEAM } from "../../data";

/**
 * Team / founder section — placeholder portraits via initials gradient.
 * Swap with real team photos before launch.
 */
export default function Team() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="relative max-w-[1200px] mx-auto">
        <div className="max-w-[820px] mb-14">
          <p
            className="sl-mono text-sm mb-4"
            style={{ color: "var(--sl-accent-primary-soft)" }}
          >
            09 — THE TEAM
          </p>
          <h2 className="sl-display text-white text-[34px] md:text-[52px]">
            Meet the team obsessing over your store{" "}
            <span className="sl-grad-text">at 2 AM.</span>
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: "var(--sl-text-secondary)" }}
          >
            Combined 38 years of Shopify experience. 500+ stores shipped. Zero
            account managers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="sl-glass sl-glass-hover p-5 text-center"
              style={{ borderRadius: "var(--sl-r-lg)" }}
            >
              <div
                className="mx-auto rounded-2xl grid place-items-center"
                style={{
                  width: 96,
                  height: 96,
                  background:
                    "linear-gradient(135deg, rgba(255,67,6,0.35), rgba(255,107,157,0.35))",
                  border: "1px solid var(--sl-border-strong)",
                  color: "#fff",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 24,
                  fontWeight: 700,
                }}
                aria-hidden
              >
                {m.name.replace(/[\[\]]/g, "").split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
              <h3
                className="font-semibold text-white mt-4 text-base"
                style={{ letterSpacing: "-0.02em" }}
              >
                {m.name}
              </h3>
              <p
                className="text-[13px] mt-1"
                style={{ color: "var(--sl-text-muted)" }}
              >
                {m.role}
              </p>
              <p
                className="text-[12px] mt-3 sl-mono"
                style={{ color: "var(--sl-text-secondary)" }}
              >
                {m.fact}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { BRAND, NAV_ITEMS } from "../data";
import NewsletterForm from "./NewsletterForm";

/**
 * Custom footer specific to the Shopify landing page.
 * Server component — interactive bits (newsletter form) are extracted into
 * a small client component so this stays cacheable.
 */
export default function ShopifyFooter() {
  return (
    <footer
      className="relative px-4 md:px-6 pt-20 pb-12"
      style={{
        borderTop: "1px solid var(--sl-border-glass)",
        background:
          "linear-gradient(180deg, rgba(255,67,6,0.04) 0%, transparent 40%)",
      }}
    >
      <div className="relative max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-white font-semibold"
            >
              <span
                className="inline-grid place-items-center w-7 h-7 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--sl-accent-primary), var(--sl-accent-warm))",
                  boxShadow: "0 0 18px -4px var(--sl-accent-primary)",
                }}
                aria-hidden
              >
                <span className="text-[12px] font-bold text-black">S</span>
              </span>
              {BRAND.name}
              <span className="opacity-60">/ Shopify</span>
            </a>
            <p
              className="mt-4 text-sm max-w-[320px]"
              style={{ color: "var(--sl-text-secondary)", lineHeight: 1.55 }}
            >
              Engineering-grade Shopify builds for DTC brands that refuse to look generic.
              14-day delivery. 30-day money-back.
            </p>

            <NewsletterForm />
          </div>

          <FooterCol
            title="Page"
            links={NAV_ITEMS.map((n) => ({ label: n.label, href: n.href }))}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "Main site", href: "/" },
              { label: "About", href: "/about" },
              { label: "Careers", href: "/career" },
              { label: "Contact", href: "/contact-us" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { label: "Privacy", href: "/policy/privacy-policy" },
              { label: "Terms", href: "/policy/terms-of-service" },
              { label: "Refund Policy", href: "/policy/refund-policy" },
              { label: "NDA Template", href: "#" },
            ]}
          />
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm"
          style={{
            borderTop: "1px solid var(--sl-border-glass)",
            color: "var(--sl-text-muted)",
          }}
        >
          <div className="sl-mono text-[12px]">
            © {new Date().getFullYear()} {BRAND.name} · All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-[12px]">
            <span>📧 {BRAND.email}</span>
            <span>📞 {BRAND.phone}</span>
            <span>🌍 Bangladesh · UAE · US</span>
          </div>
        </div>
      </div>

      <a
        href="#top"
        aria-label="Scroll to top"
        className="hidden md:grid place-items-center"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(10,10,15,0.7)",
          border: "1px solid var(--sl-border-strong)",
          backdropFilter: "blur(12px)",
          color: "var(--sl-text-primary)",
          zIndex: 90,
          textDecoration: "none",
        }}
      >
        ↑
      </a>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4
        className="sl-mono text-[12px] mb-3"
        style={{ color: "var(--sl-text-muted)", letterSpacing: "0.04em" }}
      >
        {title.toUpperCase()}
      </h4>
      <ul className="grid gap-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm"
              style={{ color: "var(--sl-text-secondary)" }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

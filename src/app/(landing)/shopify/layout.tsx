import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Store Design & Development Agency | Smart Lab Global",
  description:
    "Custom Shopify stores built in 14 days. CRO + speed + SEO baked in. 4.9★ on Clutch. 30-day money-back guarantee. Talk to a real engineer.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Shopify Store Design & Development | Smart Lab Global",
    description:
      "Engineering-grade Shopify builds in 14 days. CRO, speed, design — one team.",
    type: "website",
  },
};

export default function ShopifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

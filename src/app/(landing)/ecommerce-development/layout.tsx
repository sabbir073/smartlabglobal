import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Custom E-commerce & App Development | US · UK · CA · AU | Smart Lab Global",
  description:
    "Premium custom e-commerce stores, mobile apps and web applications for brands across the US, UK, Canada and Australia. Conversion-focused, fast, and you own 100% of the code. Book a free strategy call.",
  keywords: [
    "custom ecommerce development",
    "ecommerce website development",
    "mobile app development",
    "web application development",
    "Shopify development agency",
    "headless commerce",
    "ecommerce development company",
  ],
  alternates: { canonical: "/ecommerce-development" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Custom E-commerce & App Development | Smart Lab Global",
    description:
      "Premium custom stores and apps for ambitious brands in the US, UK, Canada and Australia. Conversion-engineered, fast, fully owned.",
    type: "website",
    url: "https://smartlabglobal.com/ecommerce-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom E-commerce & App Development | Smart Lab Global",
    description:
      "Premium custom stores and apps for brands in the US, UK, Canada and Australia.",
  },
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

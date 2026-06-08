import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Custom Software Development Company | Web Apps, SaaS & Cloud | Smart Lab Global",
  description:
    "Custom software development services for web applications, SaaS platforms, enterprise APIs and cloud systems. Senior engineers, agile delivery, code you own. Book a free technical call.",
  keywords: [
    "custom software development",
    "software development company",
    "SaaS development",
    "web application development",
    "enterprise software",
    "cloud and DevOps",
    "dedicated development team",
    "staff augmentation",
  ],
  alternates: { canonical: "/custom-software-development" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Custom Software Development | Smart Lab Global",
    description:
      "Web apps, SaaS platforms, APIs and cloud systems — built by senior engineers. Agile delivery, full IP ownership.",
    type: "website",
    url: "https://smartlabglobal.com/custom-software-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development | Smart Lab Global",
    description:
      "Web apps, SaaS platforms, APIs and cloud systems — built by senior engineers.",
  },
};

export default function SoftwareDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

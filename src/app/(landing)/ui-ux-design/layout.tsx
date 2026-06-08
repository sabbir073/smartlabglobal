import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "UI/UX Design Services | Product, App & Web Design Studio | Smart Lab Global",
  description:
    "UI/UX design studio for web and mobile products — UX research, UI design, design systems, prototyping and usability testing. Intuitive, beautiful, accessible. Book a free design consultation.",
  keywords: [
    "UI UX design",
    "UI/UX design services",
    "product design studio",
    "UX research",
    "design system",
    "mobile app design",
    "web app design",
    "prototyping",
  ],
  alternates: { canonical: "/ui-ux-design" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "UI/UX Design Services | Smart Lab Global",
    description:
      "A product design studio crafting intuitive, beautiful, accessible interfaces — from research to developer-ready handoff.",
    type: "website",
    url: "https://smartlabglobal.com/ui-ux-design",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services | Smart Lab Global",
    description:
      "Intuitive, beautiful, accessible product design — research to handoff.",
  },
};

export default function UiUxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

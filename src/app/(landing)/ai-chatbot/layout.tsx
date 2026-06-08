import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Custom AI Chatbot Development | Trained on Your Business | Smart Lab Global",
  description:
    "Custom AI chatbots trained on your own content — answering customers, capturing leads and supporting your team 24/7 across web, WhatsApp, Slack and more. Book a free demo.",
  keywords: [
    "AI chatbot",
    "custom AI chatbot",
    "chatbot development",
    "conversational AI",
    "customer support chatbot",
    "AI assistant",
    "lead generation chatbot",
  ],
  alternates: { canonical: "/ai-chatbot" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Custom AI Chatbot Development | Smart Lab Global",
    description:
      "AI chatbots trained on your business — 24/7 support, sales and lead capture across every channel.",
    type: "website",
    url: "https://smartlabglobal.com/ai-chatbot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Chatbot Development | Smart Lab Global",
    description:
      "AI chatbots trained on your business — 24/7 support across every channel.",
  },
};

export default function ChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

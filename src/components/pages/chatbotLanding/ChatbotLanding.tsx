import "./chatbot.scss";

import Reveal from "../_shared/Reveal";
import BotHeader from "./components/BotHeader";
import BotFooter from "./components/BotFooter";
import MobileStickyCta from "./components/MobileStickyCta";

import Hero from "./components/sections/Hero";
import Trust from "./components/sections/Trust";
import Capabilities from "./components/sections/Capabilities";
import UseCases from "./components/sections/UseCases";
import HowItWorks from "./components/sections/HowItWorks";
import Channels from "./components/sections/Channels";
import Roi from "./components/sections/Roi";
import Why from "./components/sections/Why";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import Faq from "./components/sections/Faq";
import BookCall from "./components/sections/BookCall";

import { FAQS } from "./data";

/**
 * Composition for /ai-chatbot — "futuristic conversational" layout.
 * Server-rendered; only the header (theme switcher) and BookCall form are client.
 * The hero chat demo is a pure-CSS animation (no JS).
 */
export default function ChatbotLanding() {
  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Custom AI Chatbot Development",
        provider: {
          "@type": "Organization",
          name: "Smart Lab Global",
          url: "https://smartlabglobal.com",
        },
        areaServed: "Worldwide",
        description:
          "Custom AI chatbot development — assistants trained on your business for customer support, sales, e-commerce and internal helpdesk, deployed across web, WhatsApp, Slack and more.",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="bot-root">
      <Reveal rootClass="bot-root" />
      <BotHeader />

      <main>
        <Hero />
        <Trust />
        <Capabilities />
        <UseCases />
        <HowItWorks />
        <Channels />
        <Roi />
        <Why />
        <Testimonials />
        <Pricing />
        <Faq />
        <BookCall />
      </main>

      <BotFooter />
      <MobileStickyCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </div>
  );
}

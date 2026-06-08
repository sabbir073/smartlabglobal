import "./software-dev.scss";

import SwdHeader from "./components/SwdHeader";
import SwdFooter from "./components/SwdFooter";
import MobileStickyCta from "./components/MobileStickyCta";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import TechStack from "./components/sections/TechStack";
import Process from "./components/sections/Process";
import Engagement from "./components/sections/Engagement";
import Results from "./components/sections/Results";
import Faq from "./components/sections/Faq";
import BookCall from "./components/sections/BookCall";

import { FAQS } from "./data";

/**
 * Composition for /custom-software-development.
 * Server-rendered; only the header (theme switcher) and BookCall form are client.
 */
export default function SoftwareDevLanding() {
  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Custom Software Development",
        provider: {
          "@type": "Organization",
          name: "Smart Lab Global",
          url: "https://smartlabglobal.com",
        },
        areaServed: "Worldwide",
        description:
          "Custom software development services — web applications, SaaS platforms, enterprise APIs, cloud and DevOps, legacy modernization and dedicated engineering teams.",
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
    <div className="swd-root">
      <SwdHeader />

      <main>
        <Hero />
        <Services />
        <TechStack />
        <Process />
        <Engagement />
        <Results />
        <Faq />
        <BookCall />
      </main>

      <SwdFooter />
      <MobileStickyCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </div>
  );
}

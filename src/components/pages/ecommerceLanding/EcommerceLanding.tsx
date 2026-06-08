import "./ecommerce.scss";

import Reveal from "../_shared/Reveal";
import EcmHeader from "./components/EcmHeader";
import EcmFooter from "./components/EcmFooter";
import MobileStickyCta from "./components/MobileStickyCta";

import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Services from "./components/sections/Services";
import Results from "./components/sections/Results";
import CaseStudies from "./components/sections/CaseStudies";
import CrossBorderTrust from "./components/sections/CrossBorderTrust";
import Process from "./components/sections/Process";
import Differentiators from "./components/sections/Differentiators";
import Testimonials from "./components/sections/Testimonials";
import TechStack from "./components/sections/TechStack";
import Pricing from "./components/sections/Pricing";
import Faq from "./components/sections/Faq";
import BookCall from "./components/sections/BookCall";

import { FAQS } from "./data";

/**
 * Composition for /ecommerce-development.
 * Section order follows the PRD §8.1 sales narrative.
 * Server-rendered; only the header (theme switcher) and BookCall form are client.
 */
export default function EcommerceLanding() {
  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Custom E-commerce & Mobile App Development",
        provider: {
          "@type": "Organization",
          name: "Smart Lab Global",
          url: "https://smartlabglobal.com",
        },
        areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
        description:
          "Custom e-commerce website, mobile app and web application development for brands across the US, UK, Canada and Australia.",
      },
      {
        "@type": "AggregateRating",
        "@id": "https://smartlabglobal.com/ecommerce-development#rating",
        itemReviewed: {
          "@type": "Organization",
          name: "Smart Lab Global",
        },
        ratingValue: "4.9",
        reviewCount: "120",
        bestRating: "5",
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
    <div className="ecm-root">
      <Reveal rootClass="ecm-root" />
      <EcmHeader />

      <main>
        <Hero />
        <Problem />
        <Services />
        <Results />
        <CaseStudies />
        <CrossBorderTrust />
        <Process />
        <Differentiators />
        <Testimonials />
        <TechStack />
        <Pricing />
        <Faq />
        <BookCall />
      </main>

      <EcmFooter />
      <MobileStickyCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </div>
  );
}

import "./shopify.scss";

import ShopifyHeader from "./components/ShopifyHeader";
import ShopifyFooter from "./components/ShopifyFooter";
import MobileStickyCta from "./components/MobileStickyCta";

import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import ProblemAgitation from "./components/sections/ProblemAgitation";
import ServicesBento from "./components/sections/ServicesBento";
import Process from "./components/sections/Process";
import CaseStudies from "./components/sections/CaseStudies";
import WhyUs from "./components/sections/WhyUs";
import Pricing from "./components/sections/Pricing";
import Comparison from "./components/sections/Comparison";
import Testimonials from "./components/sections/Testimonials";
import Team from "./components/sections/Team";
import Faq from "./components/sections/Faq";
import FinalCta from "./components/sections/FinalCta";

import { FAQS } from "./data";

/**
 * Top-level composition for /shopify.
 * Server-rendered. Sections are server components except where interactivity
 * forces "use client" (ShopifyHeader, FinalCta form, MobileStickyCta).
 */
export default function ShopifyLanding() {
  // FAQPage JSON-LD for SEO rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="shopify-root">
      <ShopifyHeader />

      <main>
        <Hero />
        <TrustBar />
        <ProblemAgitation />
        <ServicesBento />
        <Process />
        <CaseStudies />
        <WhyUs />
        <Pricing />
        <Comparison />
        <Testimonials />
        <Team />
        <Faq />
        <FinalCta />
      </main>

      <ShopifyFooter />
      <MobileStickyCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}

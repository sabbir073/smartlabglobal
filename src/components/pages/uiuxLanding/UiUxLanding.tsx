import "./uiux.scss";

import Reveal from "../_shared/Reveal";
import UxHeader from "./components/UxHeader";
import UxFooter from "./components/UxFooter";
import MobileStickyCta from "./components/MobileStickyCta";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Work from "./components/sections/Work";
import Process from "./components/sections/Process";
import Deliverables from "./components/sections/Deliverables";
import Why from "./components/sections/Why";
import Testimonials from "./components/sections/Testimonials";
import Tools from "./components/sections/Tools";
import Faq from "./components/sections/Faq";
import BookCall from "./components/sections/BookCall";

import { FAQS } from "./data";

/**
 * Composition for /ui-ux-design — "creative studio" layout.
 * Server-rendered; only the header (theme switcher) and BookCall form are client.
 */
export default function UiUxLanding() {
  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "UI/UX Design",
        provider: {
          "@type": "Organization",
          name: "Smart Lab Global",
          url: "https://smartlabglobal.com",
        },
        areaServed: "Worldwide",
        description:
          "UI/UX design services — UX research, UI and visual design, design systems, prototyping, usability testing and product/app design.",
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
    <div className="uiux-root">
      <Reveal rootClass="uiux-root" />
      <UxHeader />

      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Deliverables />
        <Why />
        <Testimonials />
        <Tools />
        <Faq />
        <BookCall />
      </main>

      <UxFooter />
      <MobileStickyCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </div>
  );
}

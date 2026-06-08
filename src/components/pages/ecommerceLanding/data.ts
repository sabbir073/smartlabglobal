/**
 * Content + SEO copy for the Custom E-commerce & App Development landing page
 * (/ecommerce-development). Built to the international PRD (US/UK/CA/AU).
 * Spelling: international/en-GB default (optimise, colour, organisation).
 * Design language: premium editorial — neutral base, orange reserved for CTAs.
 */

export const BRAND = {
  name: "Smart Lab Global",
  shortName: "SLG",
  segment: "E-commerce & Apps",
  email: "ecommerce@smartlabglobal.com",
  whatsapp: "0000000000",
  bookingUrl: "#book-call",
};

export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

/* Markets served — used in hero strip + trust block */
export const MARKETS = [
  { flag: "🇺🇸", name: "United States", zone: "ET / PT" },
  { flag: "🇬🇧", name: "United Kingdom", zone: "GMT / BST" },
  { flag: "🇨🇦", name: "Canada", zone: "ET / PT" },
  { flag: "🇦🇺", name: "Australia", zone: "AEST" },
];

/* Hero trust strip */
export const HERO_TRUST = [
  "★ 4.9/5 average client rating",
  "120+ products shipped",
  "You own 100% of the code",
];

/* Problem agitation */
export const PROBLEMS = [
  {
    icon: "🐌",
    title: "Your store is slow",
    desc: "Every extra second of load time quietly bleeds conversions — and your ad spend pays for it.",
  },
  {
    icon: "📦",
    title: "It looks like a template",
    desc: "Generic themes signal “small” to premium buyers. Your brand deserves a storefront that looks the part.",
  },
  {
    icon: "📉",
    title: "Mobile leaks sales",
    desc: "Half your traffic is on a phone, but a clunky mobile checkout is sending it straight to your competitors.",
  },
  {
    icon: "🤝",
    title: "You've been burned before",
    desc: "An overseas vendor over-promised and disappeared. You need a partner who communicates and delivers.",
  },
];

/* Services — 3 outcome-focused cards (PRD §8.1.3 / §8.2) */
export const SERVICES = [
  {
    id: "ecommerce",
    kicker: "Sell more",
    title: "Custom E-commerce Development",
    desc: "Bespoke Shopify, headless and custom storefronts engineered for speed and conversion — built to grow with a 6–8 figure brand.",
    points: ["Headless & custom builds", "Conversion-first UX", "Sub-2s load times"],
    img: "/landing/ecommerce/retail.jpg",
    ratio: [1200, 800] as const,
  },
  {
    id: "mobile",
    kicker: "Go everywhere",
    title: "Mobile App Development",
    desc: "Native-quality iOS and Android apps that turn one-time shoppers into loyal, repeat customers with a tap.",
    points: ["iOS + Android", "React Native & Flutter", "Loyalty & push built in"],
    img: "/landing/ecommerce/mobile-app.jpg",
    ratio: [1100, 1400] as const,
  },
  {
    id: "webapp",
    kicker: "Scale up",
    title: "Web Application Development",
    desc: "Custom dashboards, portals and platforms that automate the back-office and scale with demand — from MVP to enterprise.",
    points: ["SaaS & portals", "Secure & scalable", "API integrations"],
    img: "/landing/ecommerce/product.jpg",
    ratio: [1200, 800] as const,
  },
];

/* Proof: results & metrics — the most important CRO block (animated counters) */
export const RESULTS = [
  { value: "+38%", label: "Average conversion-rate lift", sub: "across rebuilt storefronts" },
  { value: "1.8s", label: "Typical mobile load time", sub: "down from 6s+" },
  { value: "120+", label: "Products shipped", sub: "since 2017" },
  { value: "$240M+", label: "Revenue processed", sub: "by stores we've built" },
];

/* Featured case studies (PRD §8.1.5 / §8.3) */
export const CASES = [
  {
    tag: "🇬🇧 UK · Fashion",
    client: "Aurelia London",
    challenge: "A fast-growing fashion label stuck on a generic theme, losing mobile shoppers at checkout.",
    build: "A headless storefront with a one-page mobile checkout and editorial product storytelling.",
    result: "+52% mobile conversion",
    sub: "and a 2.1s → 1.4s LCP improvement",
    img: "/landing/ecommerce/case1.jpg",
  },
  {
    tag: "🇺🇸 US · DTC",
    client: "Northpeak Supply",
    challenge: "A US outdoor brand whose app idea had stalled with two previous vendors.",
    build: "A React Native app with loyalty, push and a subscribe-and-save flow shipped in 11 weeks.",
    result: "31% of revenue via app",
    sub: "within the first two quarters",
    img: "/landing/ecommerce/case2.jpg",
  },
];

/* Cross-border trust block (PRD §8.1.6 — international-specific) */
export const TRUST_POINTS = [
  {
    icon: "🌍",
    title: "Built for your market",
    desc: "We ship for US, UK, Canadian and Australian brands every week — and design to each market's expectations.",
  },
  {
    icon: "🕑",
    title: "Real time-zone overlap",
    desc: "Live call windows across ET/PT, GMT/BST and AEST. You always have a named contact in your hours.",
  },
  {
    icon: "🔑",
    title: "You own 100% of the code",
    desc: "Full source, IP and design ownership handed over — clean, documented and version-controlled.",
  },
  {
    icon: "📜",
    title: "Formal contracts & NDA",
    desc: "Milestone-based invoicing, signed contracts and NDAs as standard. No surprises, no lock-in.",
  },
  {
    icon: "⚡",
    title: "One business-day response",
    desc: "We reply within one business day, in your time zone — before and after you're a client.",
  },
  {
    icon: "💳",
    title: "Pay the trusted way",
    desc: "Stripe, PayPal, bank wire, ACH and Faster Payments. Invoiced in USD, GBP, CAD or AUD.",
  },
];

/* Process (PRD §8.1.7) */
export const PROCESS = [
  { step: "01", title: "Discovery call", desc: "A free, no-obligation strategy call to understand your goals, market and numbers." },
  { step: "02", title: "Strategy & design", desc: "Conversion-led UX, brand-grade visual design and a costed, milestone roadmap you approve." },
  { step: "03", title: "Build & integrate", desc: "Agile sprints with demos every two weeks, integrating your payments, CRM and tools." },
  { step: "04", title: "Launch & optimise", desc: "Zero-downtime launch on global edge hosting, then data-driven CRO to keep lifting revenue." },
];

/* Differentiators (PRD §8.1.8) */
export const DIFFERENTIATORS = [
  { title: "Outcome-obsessed", desc: "We measure success in your revenue, load times and retention — not our hours." },
  { title: "Premium, not generic", desc: "Brand-grade design that makes a 6-figure store look like an 8-figure one." },
  { title: "Senior team only", desc: "No juniors learning on your budget. Vetted engineers and designers, end to end." },
  { title: "Honest & transparent", desc: "Fixed scopes, clear timelines, milestone billing and weekly communication." },
];

/* Testimonials (PRD §8.1.9 — named + market) */
export const TESTIMONIALS = [
  {
    quote: "They rebuilt our storefront in six weeks and our mobile conversion jumped over 50%. The communication was better than agencies in our own city.",
    name: "Hannah Whitfield",
    role: "Founder, Aurelia London",
    market: "🇬🇧 United Kingdom",
  },
  {
    quote: "After two failed vendors, Smart Lab actually shipped. Our app now drives a third of revenue. They felt like part of our team, time zones and all.",
    name: "Marcus Reilly",
    role: "CEO, Northpeak Supply",
    market: "🇺🇸 United States",
  },
  {
    quote: "Professional, fast and genuinely premium work. They handled contracts, IP and invoicing in AUD without us having to ask. Rare to find.",
    name: "Priya Nair",
    role: "Director, Coastline Co.",
    market: "🇦🇺 Australia",
  },
];

/* Tech stack (light, logos as text chips) */
export const TECH = [
  "Shopify", "Next.js", "React Native", "Flutter", "Node.js", "Stripe",
  "Sanity", "Contentful", "AWS", "Vercel", "Klaviyo", "Algolia",
];

/* Pricing / engagement anchors (multi-currency display per PRD §8.4) */
export const PRICING = [
  {
    name: "Fixed Scope",
    anchor: "from $9,000 USD",
    alt: "≈ £7,200 · C$12,300 · A$13,800",
    ideal: "Defined storefronts & MVPs",
    points: ["Locked scope & timeline", "Milestone-based invoicing", "Ideal for a focused v1 launch"],
    featured: false,
  },
  {
    name: "Growth Retainer",
    anchor: "from $4,500 USD / mo",
    alt: "≈ £3,600 · C$6,150 · A$6,900",
    ideal: "Ongoing build + CRO",
    points: ["Dedicated senior squad", "Continuous design & dev", "Monthly CRO experiments"],
    featured: true,
  },
  {
    name: "Custom Quote",
    anchor: "Let's scope it",
    alt: "Priced to your roadmap",
    ideal: "Complex apps & platforms",
    points: ["Bespoke scope & team", "Enterprise integrations", "Flexible commercial terms"],
    featured: false,
  },
];

/* FAQ — handles cross-border objections (PRD §8.1.11). Also powers JSON-LD. */
export const FAQS = [
  {
    q: "Do you work with brands in my country?",
    a: "Yes. We work with brands across the United States, United Kingdom, Canada and Australia every week, with live call windows in each region's business hours and a named point of contact for your project.",
  },
  {
    q: "Will time zones be a problem?",
    a: "No. We maintain overlapping working hours across US ET/PT, UK GMT/BST and AU AEST, and we respond to messages within one business day in your time zone. You'll never feel out of the loop.",
  },
  {
    q: "Do I own the code and IP?",
    a: "100%. You retain full ownership of all source code, designs and intellectual property. Everything is handed over clean, documented and version-controlled, under a signed contract and NDA.",
  },
  {
    q: "How do payments and contracts work?",
    a: "We use formal contracts, NDAs and milestone-based invoicing. You can pay via Stripe, PayPal, bank wire, ACH or Faster Payments, invoiced in USD, GBP, CAD or AUD.",
  },
  {
    q: "How much does a custom store or app cost?",
    a: "Fixed-scope storefronts start from around $9,000 USD and growth retainers from $4,500 USD/month. Larger apps and platforms are custom-quoted. You'll get a transparent, costed roadmap on your first call.",
  },
  {
    q: "How long does a build take?",
    a: "A focused storefront typically launches in 4–8 weeks, and a first app version in 8–12 weeks. We commit to a timeline during the strategy phase and demo working software every two weeks.",
  },
  {
    q: "What if I'm not ready to commit?",
    a: "Start with a free, no-obligation strategy call — or grab our free Ecommerce Conversion Audit. There's no pressure and no spam, just a straight answer on whether we're a fit.",
  },
];

export const FOOTER_LINKS = [
  {
    heading: "Services",
    links: [
      { label: "E-commerce Development", href: "#services" },
      { label: "Mobile App Development", href: "#services" },
      { label: "Web App Development", href: "#services" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "#work" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "#book-call" },
    ],
  },
];

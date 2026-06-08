/**
 * Content for the Shopify Landing Page.
 * v1 uses placeholders — swap with real copy/assets before launch.
 */

export const BRAND = {
  name: "Smart Lab Global",
  shortName: "SLG",
  phone: "+000 0000 0000",
  whatsapp: "0000000000",
  email: "shopify@smartlabglobal.com",
  bookingUrl: "#book-call",
};

export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const SERVICES = [
  {
    id: "development",
    title: "Shopify Store Development",
    blurb: "Custom builds engineered for speed, conversion, and scale.",
    size: "lg" as const,
  },
  {
    id: "design",
    title: "Shopify Store Design",
    blurb: "Editorial-grade design that signals premium in 4 seconds.",
    size: "md" as const,
  },
  {
    id: "cro",
    title: "Shopify CRO",
    blurb: "Stop leaking revenue. Test, iterate, ship — every week.",
    size: "md" as const,
  },
  {
    id: "speed",
    title: "Speed Optimization",
    blurb: "Sub-1.8s LCP. Less spend. More converted clicks.",
    size: "sm" as const,
  },
  {
    id: "theme",
    title: "Theme Customization",
    blurb: "Surgical edits to your existing theme — without breaking it.",
    size: "sm" as const,
  },
  {
    id: "seo",
    title: "Shopify SEO",
    blurb: "Technical SEO + content that actually moves rankings.",
    size: "sm" as const,
  },
  {
    id: "apps",
    title: "App Integration",
    blurb: "Klaviyo, Recharge, Yotpo, custom — wired the right way.",
    size: "sm" as const,
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    blurb: "Conversion-engineered pages for paid traffic.",
    size: "sm" as const,
  },
  {
    id: "dropshipping",
    title: "Dropshipping Store",
    blurb: "Profitable, branded dropshipping setups — not a template.",
    size: "sm" as const,
  },
  {
    id: "product-upload",
    title: "Product Upload",
    blurb: "SEO-clean listings at scale. Variants, metafields, done.",
    size: "sm" as const,
  },
  {
    id: "marketing",
    title: "Shopify Marketing",
    blurb: "Paid + lifecycle that compounds month over month.",
    size: "sm" as const,
  },
  {
    id: "management",
    title: "Ongoing Management",
    blurb: "Your store, fully managed. We handle the boring + the urgent.",
    size: "sm" as const,
  },
];

export const PROCESS_STEPS = [
  {
    day: "Day 1",
    title: "Discovery Call",
    body: "30-min strategy session. We audit, you talk. Free, no pitch.",
  },
  {
    day: "Days 2–3",
    title: "Strategy & Wireframes",
    body: "UX blueprint, IA, conversion architecture. Receipts attached.",
  },
  {
    day: "Days 4–7",
    title: "Design",
    body: "Pixel-perfect Figma mockups. Unlimited revisions in scope.",
  },
  {
    day: "Days 8–12",
    title: "Development",
    body: "Custom theme build. CRO + speed baked in from commit one.",
  },
  {
    day: "Day 13–14+",
    title: "Launch & Optimize",
    body: "Deploy, training, handoff. Ongoing optimization on request.",
  },
];

export const CASE_STUDIES = [
  {
    brand: "Lumen & Co.",
    niche: "Apparel · UK",
    summary:
      "Replatformed a struggling Shopify Plus brand. Rebuilt theme from scratch, killed two heavy apps, rewrote checkout. The numbers speak.",
    metrics: [
      { label: "CR uplift", value: "+187%" },
      { label: "Revenue / 90d", value: "$1.2M" },
      { label: "LCP", value: "4.2s → 1.1s" },
    ],
  },
  {
    brand: "Northwave",
    niche: "Outdoor · US",
    summary:
      "Custom design + CRO sprint pre-BFCM. Doubled AOV with a smarter PDP layout and post-purchase bundles.",
    metrics: [
      { label: "AOV", value: "+94%" },
      { label: "BFCM revenue", value: "$2.4M" },
      { label: "Mobile CR", value: "1.1% → 3.8%" },
    ],
  },
  {
    brand: "Soko Beauty",
    niche: "Beauty · UAE",
    summary:
      "Built from zero in 12 days. Klaviyo lifecycle + paid foundation set up day one. Profitable in month two.",
    metrics: [
      { label: "Build time", value: "12 days" },
      { label: "ROAS (mo 2)", value: "3.4x" },
      { label: "Email rev share", value: "31%" },
    ],
  },
];

export const WHY_US = [
  {
    icon: "⚡",
    title: "Speed-obsessed engineers",
    body: "We benchmark every commit. 95+ Lighthouse mobile or we don't ship.",
  },
  {
    icon: "🎯",
    title: "CRO is religion",
    body: "Every section A/B-ready. Hypotheses written before pixels.",
  },
  {
    icon: "🤝",
    title: "Direct Slack, real humans",
    body: "No account-manager telephone game. You message your project lead.",
  },
  {
    icon: "🔒",
    title: "NDA-first",
    body: "Your data and IP protected by default. Template downloadable.",
  },
  {
    icon: "💰",
    title: "Performance-tied pricing",
    body: "Optional revenue-share on retainers. We win when you win.",
  },
  {
    icon: "📞",
    title: "24h response SLA",
    body: "Reply within one business day or that month is on us.",
  },
];

export const PRICING = [
  {
    name: "Starter",
    from: "$1,499",
    forWhom: "New stores",
    delivery: "7 days",
    cta: "Get Started",
    featured: false,
    includes: [
      "Theme setup + brand styling",
      "Up to 20 products uploaded",
      "Basic on-page SEO",
      "Core pages: Home, PDP, Cart, About",
      "Mobile optimization pass",
    ],
  },
  {
    name: "Growth",
    from: "$4,999",
    forWhom: "Stuck below $50K/mo",
    delivery: "14 days",
    cta: "Book a Call",
    featured: true,
    includes: [
      "Full custom design (Figma → live)",
      "CRO architecture baked in",
      "Speed optimization pass",
      "Up to 100 products uploaded",
      "Klaviyo + analytics wiring",
      "30 days post-launch support",
    ],
  },
  {
    name: "Scale",
    from: "$12,000+",
    forWhom: "Scaling past $1M",
    delivery: "21 days + ongoing",
    cta: "Talk to Founder",
    featured: false,
    includes: [
      "Everything in Growth",
      "Custom apps / Shopify Functions",
      "Headless / Hydrogen options",
      "Retainer with SLA",
      "Dedicated project lead",
      "Quarterly CRO sprints",
    ],
  },
];

export const COMPARISON_ROWS = [
  { label: "Pixel-perfect custom design", diy: false, freelancer: false, us: true },
  { label: "95+ Lighthouse, sub-1.8s LCP", diy: false, freelancer: false, us: true },
  { label: "CRO architecture included", diy: false, freelancer: false, us: true },
  { label: "NDA + IP protection", diy: false, freelancer: false, us: true },
  { label: "30-day money-back guarantee", diy: false, freelancer: false, us: true },
  { label: "24h response SLA", diy: false, freelancer: false, us: true },
  { label: "Launch in 14 days", diy: false, freelancer: false, us: true },
  { label: "Direct Slack with project lead", diy: false, freelancer: false, us: true },
];

export const TESTIMONIALS = [
  {
    name: "Aarav P.",
    role: "Founder, Apparel DTC",
    quote:
      "We shipped in 13 days. CR moved from 1.4% to 3.1% in the first month. They obsess like it's their store.",
    rating: 5,
  },
  {
    name: "Sara K.",
    role: "CMO, Beauty Brand",
    quote:
      "Best $5K we've spent on the business. Zero account-manager nonsense — real engineers, real Slack.",
    rating: 5,
  },
  {
    name: "Daniel R.",
    role: "Owner, Outdoor Goods",
    quote:
      "Speed obsession is real. Mobile LCP went from 4.4s to 1.2s. Ad CPAs dropped 28% the next week.",
    rating: 5,
  },
  {
    name: "Mei L.",
    role: "Founder, Skincare",
    quote:
      "I've worked with three Shopify agencies. This one actually delivered what they pitched. Hire them.",
    rating: 5,
  },
  {
    name: "Hassan T.",
    role: "DTC Operator, MENA",
    quote:
      "Built our store, wired Klaviyo, set up Triple Whale, launched ads. All in 14 days. Unreal.",
    rating: 5,
  },
  {
    name: "Priya V.",
    role: "Marketing Lead, Wellness",
    quote:
      "We A/B tested 6 things in 30 days. CR up 41%. They actually do CRO, not just sell it.",
    rating: 5,
  },
];

export const TEAM = [
  { name: "[Founder Name]", role: "Founder & Engineering Lead", fact: "Shipped 200+ Shopify stores." },
  { name: "[Designer Name]", role: "Design Director", fact: "Ex-DTC brand designer." },
  { name: "[CRO Name]", role: "CRO Lead", fact: "Has run 800+ experiments." },
  { name: "[Eng Name]", role: "Senior Engineer", fact: "Speed obsessed. Reads CrUX for fun." },
];

export const FAQS = [
  {
    q: "How fast can you actually deliver a custom Shopify store?",
    a: "Our Growth track is 14 days from kickoff to launch — that includes discovery, design, build, and CRO architecture. Starter is 7 days, Scale is 21 days plus retainer. We hit the dates or you get refunded; that's in writing.",
  },
  {
    q: "Is your pricing really fixed or are there surprise add-ons?",
    a: "Fixed. The number you see is the number you pay for the scope on the page. If your project genuinely needs custom apps or headless work we scope that separately before you commit a dollar.",
  },
  {
    q: "We already have a Shopify store — can you work with it?",
    a: "Yes, this is most of our work. We audit, identify the leaks, rebuild or surgically refactor — depending on what's faster for your timeline and budget.",
  },
  {
    q: "What's the money-back guarantee?",
    a: "If within 30 days of launch you don't see measurable improvement on the agreed conversion metric, we refund the build fee. Full terms on our refund-policy page.",
  },
  {
    q: "Do you sign an NDA?",
    a: "Yes — NDA-first is our default. Template available on request before you share anything.",
  },
  {
    q: "What happens after launch?",
    a: "30 days of post-launch support is included on Growth and Scale. Beyond that, we offer optional monthly retainers covering CRO sprints, performance, and feature work.",
  },
  {
    q: "Can you migrate us from WooCommerce / BigCommerce / Magento?",
    a: "Shopify and Shopify Plus migrations — yes, regularly. We don't take Magento maintenance work, but we'll happily migrate off it.",
  },
  {
    q: "Where is the team based and what timezones do you cover?",
    a: "Distributed across Bangladesh, UAE, and the US — we cover working hours in EU, North America, and APAC. Your project lead works in a timezone you choose.",
  },
  {
    q: "How do you handle apps and third-party integrations?",
    a: "We audit your stack first. Most stores can drop 3–6 apps and consolidate logic into the theme — that's faster, cheaper, and more reliable. We document everything.",
  },
  {
    q: "What's your refund rate?",
    a: "Around 1.2% over the last 24 months. We pre-qualify hard so most refund requests come from genuine scope mismatches, not delivery issues.",
  },
];

export const TRUST_LOGOS = [
  "Shopify Partner",
  "Klaviyo Master",
  "Triple Whale",
  "Recharge",
  "Gorgias",
  "Yotpo",
  "Northbeam",
  "Postscript",
];

export const PROBLEM_CARDS = [
  {
    title: "Visitors land. Look. Leave.",
    body: "Industry-average Shopify CR is 1.4%. Your generic theme is probably worse.",
    source: "Shopify Plus benchmark, 2025",
  },
  {
    title: "Your site loads like 2017.",
    body: "Every 1s of mobile delay = ~7% conversion drop. Your ads pay the bill.",
    source: "Akamai / Portent",
  },
  {
    title: "Your design screams template.",
    body: "Buyers smell generic. They bounce in 4 seconds and never come back.",
    source: "Internal study, 800+ DTC sessions",
  },
];

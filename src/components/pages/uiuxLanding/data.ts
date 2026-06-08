/**
 * Content + SEO copy for the UI/UX Design Service landing page (/ui-ux-design).
 * Design language: "creative studio" — bold oversized type, masonry portfolio,
 * colour-swatch motif. Orange #FF4306 accent. Distinct from the other pages.
 */

export const BRAND = {
  name: "Smart Lab Global",
  shortName: "SLG",
  studio: "Design Studio",
  email: "design@smartlabglobal.com",
  whatsapp: "0000000000",
  bookingUrl: "#book-call",
};

export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQ", href: "#faq" },
];

/* Stat ticker under hero */
export const STATS = [
  { v: "200+", l: "Screens designed monthly" },
  { v: "+47%", l: "Avg. lift in task success" },
  { v: "4.9/5", l: "Client rating" },
  { v: "14d", l: "From kickoff to prototype" },
];

/* Services — what we design */
export const SERVICES = [
  {
    no: "01",
    title: "UX Research & Strategy",
    desc: "User interviews, journey maps and data-led decisions so you design the right thing — before a pixel is drawn.",
  },
  {
    no: "02",
    title: "UI & Visual Design",
    desc: "Beautiful, on-brand interfaces with pixel-perfect detail and accessibility baked into every state.",
  },
  {
    no: "03",
    title: "Design Systems",
    desc: "Scalable component libraries in Figma that keep your product consistent and your team shipping faster.",
  },
  {
    no: "04",
    title: "Prototyping",
    desc: "Interactive, clickable prototypes that feel real — so you can validate and demo before you build.",
  },
  {
    no: "05",
    title: "Usability Testing",
    desc: "Structured testing that turns guesses into evidence and uncovers the friction costing you conversions.",
  },
  {
    no: "06",
    title: "Product & App Design",
    desc: "End-to-end web and mobile app design, from first concept to developer-ready handoff.",
  },
];

/* Portfolio / work — masonry gallery. tall=portrait images */
export const WORK = [
  { title: "Fintech mobile app", tag: "Product Design", img: "/landing/uiux/app-ui.jpg", tall: true, w: 900, h: 1200 },
  { title: "SaaS analytics dashboard", tag: "UI · Design System", img: "/landing/uiux/web-mockup.jpg", tall: false, w: 1200, h: 800 },
  { title: "Wireframe to flow", tag: "UX Research", img: "/landing/uiux/wireframe.jpg", tall: false, w: 1200, h: 900 },
  { title: "Commerce app suite", tag: "Mobile Design", img: "/landing/uiux/mobile-screens.jpg", tall: true, w: 900, h: 1200 },
  { title: "Design sprint workshop", tag: "Strategy", img: "/landing/uiux/workshop.jpg", tall: false, w: 1200, h: 800 },
  { title: "Brand & interface kit", tag: "Visual Design", img: "/landing/uiux/tools.jpg", tall: false, w: 1200, h: 900 },
];

/* Process — design sprint steps */
export const PROCESS = [
  { step: "01", title: "Discover", desc: "We dig into your users, goals and competitors — turning fuzzy ideas into a sharp brief." },
  { step: "02", title: "Define", desc: "Information architecture, user flows and low-fidelity wireframes that map the experience." },
  { step: "03", title: "Design", desc: "High-fidelity UI, a reusable design system and on-brand visuals across every screen." },
  { step: "04", title: "Prototype", desc: "An interactive prototype you can click, test and share with stakeholders." },
  { step: "05", title: "Validate & hand off", desc: "Usability testing, refinements and a clean, developer-ready Figma handoff." },
];

/* Deliverables — what you get */
export const DELIVERABLES = [
  "User research & insights report",
  "Information architecture & user flows",
  "Low & high-fidelity wireframes",
  "Pixel-perfect UI for every screen",
  "Reusable Figma design system",
  "Interactive clickable prototype",
  "Usability test findings",
  "Developer-ready handoff & specs",
];

/* Why us */
export const WHY = [
  { icon: "🎯", title: "Design with intent", desc: "Every decision ties back to a user need and a business goal — never decoration for its own sake." },
  { icon: "⚡", title: "Fast, not rushed", desc: "A working prototype in about two weeks, with momentum that keeps your project moving." },
  { icon: "🧩", title: "Built to scale", desc: "Design systems and clean handoff so your engineers build faster and stay consistent." },
  { icon: "♿", title: "Accessible by default", desc: "WCAG-minded contrast, states and structure so your product works for everyone." },
];

/* Testimonials */
export const TESTIMONIALS = [
  {
    quote: "They turned a messy idea into a crisp, intuitive product in weeks. Our onboarding completion jumped almost 50%.",
    name: "Daniel Cho",
    role: "Product Lead, Lunar Finance",
  },
  {
    quote: "The design system alone paid for itself. Our team ships features twice as fast and everything just looks right now.",
    name: "Sofia Marchetti",
    role: "CTO, Verde Labs",
  },
];

/* Tools strip */
export const TOOLS = ["Figma", "FigJam", "Framer", "Sketch", "Adobe XD", "Maze", "Principle", "Notion"];

/* FAQ — powers JSON-LD */
export const FAQS = [
  {
    q: "What does a UI/UX design project include?",
    a: "Most projects cover research, information architecture, wireframes, high-fidelity UI, a reusable design system, an interactive prototype and a developer-ready handoff. We tailor the exact scope to your product and stage on the first call.",
  },
  {
    q: "How long does a design project take?",
    a: "A focused product or app design typically reaches an interactive prototype in about two weeks, with a full design system and handoff over the following weeks. We agree the timeline up front and share progress continuously.",
  },
  {
    q: "Do you only design, or can you build too?",
    a: "We design end to end and hand off clean, developer-ready Figma files and specs. We also have engineering teams in-house, so we can take your designs all the way to a shipped product if you'd like.",
  },
  {
    q: "Do you work with our existing brand and design system?",
    a: "Absolutely. We can design within your existing brand and components, extend your current design system, or build a brand-new one from scratch — whatever your product needs.",
  },
  {
    q: "Will the designs be accessible?",
    a: "Yes. We design with WCAG 2.1 AA in mind — sufficient colour contrast, clear focus and error states, and a logical structure — so your product is usable for everyone.",
  },
  {
    q: "What do I actually receive at the end?",
    a: "A complete, organised Figma file with your UI, design system, interactive prototype and handoff specs — plus research and usability findings. You own all of it.",
  },
];

export const FOOTER_LINKS = [
  {
    heading: "Services",
    links: [
      { label: "UX Research", href: "#services" },
      { label: "UI Design", href: "#services" },
      { label: "Design Systems", href: "#services" },
      { label: "Product & App Design", href: "#services" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "Our Work", href: "#work" },
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "#book-call" },
    ],
  },
];

/**
 * Content + SEO copy for the AI Custom Chatbot landing page (/ai-chatbot).
 * Design language: "futuristic conversational" — neon gradients, animated chat
 * demo, gradient-bordered cards. Orange #FF4306 primary + electric cyan accent.
 */

export const BRAND = {
  name: "Smart Lab Global",
  shortName: "SLG",
  product: "AI Chatbot",
  email: "ai@smartlabglobal.com",
  whatsapp: "0000000000",
  bookingUrl: "#book-call",
};

export const NAV_ITEMS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Use cases", href: "#use-cases" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

/* Animated hero chat demo — rendered as a conversation. */
export const CHAT_DEMO = [
  { from: "user", text: "Do you ship to Canada, and how long does it take?" },
  { from: "bot", text: "Yes! We ship to Canada in 3–5 business days 🇨🇦 Orders over $75 ship free. Want me to start your order?" },
  { from: "user", text: "What's your return policy?" },
  { from: "bot", text: "Easy 30-day returns, no questions asked. I can email you a prepaid label right now — what's your order number?" },
];

/* Trust strip */
export const TRUST = [
  "Trained on your data",
  "Live in days, not months",
  "Hand-off to humans anytime",
  "GDPR-ready",
];

/* Capabilities — bento grid */
export const CAPABILITIES = [
  {
    title: "Answers from your knowledge",
    desc: "Trained on your docs, site, PDFs and FAQs — so every answer is accurate, on-brand and up to date.",
    size: "lg" as const,
    icon: "🧠",
  },
  {
    title: "24/7 instant replies",
    desc: "No queues, no waiting. Your customers get answers at 3am as easily as 3pm.",
    size: "sm" as const,
    icon: "⚡",
  },
  {
    title: "Speaks 50+ languages",
    desc: "Detects and replies in your customer's language automatically.",
    size: "sm" as const,
    icon: "🌐",
  },
  {
    title: "Books, sells & captures leads",
    desc: "Qualifies prospects, books meetings and pushes data straight into your CRM.",
    size: "md" as const,
    icon: "🎯",
  },
  {
    title: "Knows when to escalate",
    desc: "Seamlessly hands complex chats to a human with full context — no repeating.",
    size: "md" as const,
    icon: "🤝",
  },
];

/* Use cases */
export const USE_CASES = [
  { icon: "🛟", title: "Customer support", desc: "Deflect up to 70% of repetitive tickets while keeping CSAT high." },
  { icon: "💸", title: "Sales & lead-gen", desc: "Engage visitors instantly, qualify them and book demos around the clock." },
  { icon: "🛒", title: "E-commerce assistant", desc: "Product recommendations, order tracking and returns — all in chat." },
  { icon: "🏢", title: "Internal helpdesk", desc: "Answer HR, IT and policy questions for your team in seconds." },
];

/* How it works */
export const STEPS = [
  { step: "01", title: "Connect your knowledge", desc: "Point us at your website, docs, help centre and PDFs. We train a private model on your content." },
  { step: "02", title: "Customise & brand", desc: "Tune its tone, set guardrails, add your colours and define when it should hand off to a human." },
  { step: "03", title: "Deploy everywhere", desc: "Drop it on your site and connect WhatsApp, Messenger, Slack and more — one brain, every channel." },
  { step: "04", title: "Learn & improve", desc: "Review real conversations, close knowledge gaps and watch resolution rates climb." },
];

/* Integrations / channels */
export const CHANNELS = [
  "Website widget", "WhatsApp", "Messenger", "Instagram", "Slack", "Microsoft Teams",
  "Shopify", "Zendesk", "HubSpot", "Salesforce", "Intercom", "Telegram",
];

/* ROI stats */
export const ROI = [
  { value: "70%", label: "of routine tickets auto-resolved" },
  { value: "24/7", label: "instant availability" },
  { value: "<3s", label: "average response time" },
  { value: "3.5x", label: "more leads captured after hours" },
];

/* Why us */
export const WHY = [
  { icon: "🔒", title: "Your data stays yours", desc: "Private, isolated models. We never train public models on your content, and you own everything." },
  { icon: "🎛️", title: "Guardrails you control", desc: "Define exactly what it can and can't say, so it never goes off-script or hallucinates." },
  { icon: "🧩", title: "Built into your stack", desc: "Connects to the tools you already use — CRM, helpdesk, e-commerce and chat channels." },
  { icon: "🚀", title: "Live in days", desc: "A custom-trained assistant deployed and answering real questions within a week." },
];

/* Testimonials */
export const TESTIMONIALS = [
  {
    quote: "It handles 68% of our support chats now. Our team finally focuses on the conversations that actually need a human.",
    name: "Elena Rossi",
    role: "Head of CX, Brightwave",
  },
  {
    quote: "We captured 3x more qualified leads in the first month — it never sleeps and it never forgets to follow up.",
    name: "Tom Becker",
    role: "Growth Lead, Finflow",
  },
];

/* Pricing anchors */
export const PRICING = [
  {
    name: "Starter",
    anchor: "from $499/mo",
    ideal: "Small sites & FAQs",
    points: ["1 channel (web widget)", "Trained on your content", "Up to 1,000 chats/mo", "Human hand-off"],
    featured: false,
  },
  {
    name: "Growth",
    anchor: "from $1,200/mo",
    ideal: "Support & sales teams",
    points: ["Up to 4 channels", "CRM + helpdesk integration", "Up to 8,000 chats/mo", "Analytics dashboard"],
    featured: true,
  },
  {
    name: "Enterprise",
    anchor: "Custom",
    ideal: "High-volume & complex",
    points: ["Unlimited channels", "Custom integrations & SLAs", "Dedicated model & support", "On-prem options"],
    featured: false,
  },
];

/* FAQ — powers JSON-LD */
export const FAQS = [
  {
    q: "How is this different from a generic chatbot?",
    a: "We build a custom assistant trained specifically on your business — your products, policies and tone of voice — rather than a generic script. It understands context, answers naturally and hands off to your team when needed.",
  },
  {
    q: "Will it make things up (hallucinate)?",
    a: "We ground the assistant in your approved content and add guardrails that keep it on-topic. When it doesn't know something, it says so and offers to connect a human — it won't invent answers.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most chatbots are trained, branded and deployed within a week or two, depending on how much content we're connecting and which channels you want.",
  },
  {
    q: "Which channels can it work on?",
    a: "Your website, plus WhatsApp, Messenger, Instagram, Slack, Microsoft Teams, Telegram and more — one assistant, available everywhere your customers are.",
  },
  {
    q: "Is my data secure and private?",
    a: "Yes. We use private, isolated models, never train public models on your data, and handle everything to GDPR-grade standards. You retain full ownership of your content and conversations.",
  },
  {
    q: "Can it hand off to a human?",
    a: "Always. You define the rules for escalation, and when a chat needs a person, it's passed over with the full conversation history so your team never starts from scratch.",
  },
];

export const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Use cases", href: "#use-cases" },
      { label: "Integrations", href: "#how" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "#book-call" },
    ],
  },
];

/**
 * Content + SEO copy for the Custom Software Development landing page (/custom-software-development).
 * Design language: "engineering blueprint" — technical, structured, mono accents.
 * Keep copy keyword-rich but human. Swap contact constants before launch.
 */

export const BRAND = {
  name: "Smart Lab Global",
  shortName: "SLG",
  segment: "Software Engineering",
  phone: "+000 0000 0000",
  whatsapp: "0000000000",
  email: "software@smartlabglobal.com",
  bookingUrl: "#book-call",
};

export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
  { label: "Engagement", href: "#engagement" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

/* ---- Trust / logos strip ---- */
export const TRUST_STATS = [
  { value: "120+", label: "Products shipped" },
  { value: "14", label: "Countries served" },
  { value: "99.95%", label: "Uptime delivered" },
  { value: "4.9/5", label: "Client rating" },
];

/* ---- Core services (what we build) ---- */
export const SERVICES = [
  {
    no: "01",
    title: "Custom Web Applications",
    blurb:
      "Scalable, secure web platforms built on modern frameworks — from internal tools to multi-tenant SaaS handling millions of requests.",
    tags: ["SaaS", "Dashboards", "Portals"],
  },
  {
    no: "02",
    title: "Enterprise Software & APIs",
    blurb:
      "Robust back-end systems, microservices and well-documented REST/GraphQL APIs that connect your tools and scale with demand.",
    tags: ["Microservices", "REST", "GraphQL"],
  },
  {
    no: "03",
    title: "SaaS Product Engineering",
    blurb:
      "End-to-end product development — architecture, billing, multi-tenancy and CI/CD — to take your idea from MVP to market.",
    tags: ["MVP", "Billing", "Multi-tenant"],
  },
  {
    no: "04",
    title: "Cloud & DevOps",
    blurb:
      "Containerized deployments, infrastructure-as-code and automated pipelines on AWS, Azure and GCP for zero-downtime releases.",
    tags: ["AWS", "Kubernetes", "CI/CD"],
  },
  {
    no: "05",
    title: "Legacy Modernization",
    blurb:
      "Re-architect aging systems into maintainable, cloud-native codebases — without disrupting the business that depends on them.",
    tags: ["Refactor", "Migration", "Re-platform"],
  },
  {
    no: "06",
    title: "Dedicated Engineering Teams",
    blurb:
      "Vetted developers, QA and DevOps embedded into your workflow — augmenting your team with senior talent on demand.",
    tags: ["Staff aug", "QA", "Agile"],
  },
];

/* ---- Tech stack (horizontal scroller) ---- */
export const STACK_GROUPS = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue", "Tailwind"] },
  { group: "Backend", items: ["Node.js", "Python", "Go", ".NET", "Java"] },
  { group: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Elastic"] },
  { group: "Cloud", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"] },
];

/* ---- Process timeline ---- */
export const PROCESS = [
  {
    step: "01",
    title: "Discovery & Scoping",
    desc: "We map requirements, risks and success metrics, then turn them into a costed technical roadmap — before a line of code is written.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    desc: "System design, data modeling and UX wireframes. You approve the blueprint, so there are no surprises downstream.",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "Two-week sprints with demos at the end of each. You see working software early and steer priorities continuously.",
  },
  {
    step: "04",
    title: "QA & Hardening",
    desc: "Automated tests, security review and load testing baked into the pipeline — quality is a gate, not an afterthought.",
  },
  {
    step: "05",
    title: "Launch & Scale",
    desc: "Zero-downtime deployment, monitoring and SLAs. We stay on for support and iterate as your product grows.",
  },
];

/* ---- Engagement models (comparison) ---- */
export const ENGAGEMENTS = [
  {
    name: "Fixed Scope",
    tagline: "Defined project, fixed price",
    best: "Well-defined builds & MVPs",
    points: ["Locked scope & timeline", "Milestone-based billing", "Ideal for v1 launches"],
    featured: false,
  },
  {
    name: "Dedicated Team",
    tagline: "Your embedded squad",
    best: "Ongoing product development",
    points: ["Senior engineers full-time", "Scale up or down monthly", "You own the backlog"],
    featured: true,
  },
  {
    name: "Staff Augmentation",
    tagline: "Plug skills into your team",
    best: "Filling specific skill gaps",
    points: ["Vetted individual experts", "Integrate with your process", "Hourly or monthly"],
    featured: false,
  },
];

/* ---- Results / metrics ---- */
export const RESULTS = [
  { value: "60%", label: "Faster time-to-market vs. in-house build" },
  { value: "3.2x", label: "Average return on engineering spend" },
  { value: "40%", label: "Lower infra cost after cloud migration" },
  { value: "0", label: "Critical security incidents to date" },
];

/* ---- FAQ (also powers JSON-LD) ---- */
export const FAQS = [
  {
    q: "How much does custom software development cost?",
    a: "It depends on scope, but most projects start at a fixed discovery sprint so you get a precise, costed roadmap before committing to the full build. Dedicated teams are billed monthly per engineer. We'll give you a transparent estimate on your first call.",
  },
  {
    q: "How long does it take to build a custom application?",
    a: "A focused MVP typically ships in 8–12 weeks. Larger enterprise platforms run in phased releases so you get usable software early and expand from there. We commit to a timeline in the architecture phase.",
  },
  {
    q: "Do I own the source code and IP?",
    a: "Yes. You retain full ownership of all source code, designs and intellectual property. We work under NDA and hand over clean, documented, version-controlled repositories.",
  },
  {
    q: "Which technologies do you work with?",
    a: "We're stack-agnostic and choose the right tool for the job — typically React/Next.js, Node.js, Python, Go and .NET, deployed on AWS, Azure or GCP with Docker and Kubernetes.",
  },
  {
    q: "Can you work with our existing team and codebase?",
    a: "Absolutely. We can augment your team, take over a legacy codebase, or run as a fully independent squad — integrating with your sprints, tooling and standards.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing support, monitoring and iteration under clear SLAs. Many clients keep a dedicated team on to evolve the product as it scales.",
  },
];

/* ---- Footer link columns ---- */
export const FOOTER_LINKS = [
  {
    heading: "Services",
    links: [
      { label: "Web Applications", href: "#services" },
      { label: "SaaS Engineering", href: "#services" },
      { label: "Cloud & DevOps", href: "#services" },
      { label: "Staff Augmentation", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/career" },
    ],
  },
];

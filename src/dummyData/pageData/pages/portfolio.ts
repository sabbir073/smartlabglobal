import React from "react";
import {
  dummyCaseStudies,
  dummyExploreItems,
  dummyIndustries,
  dummySpotlight,
} from "../dummyList";

const portfolioData = {
  title: "Our Client Portfolio",
  slug: "machine-learning",
  breadcrumb: [
    {
      title: "Home",
      slug: "home",
    },
  ],
  excerpt:
    "We’re here to connect, collaborate, and support your journey. Reach out to discover how Smart-Lab Global can help transform your vision into reality.",
  content: "",
  cover: "https://smartlab-api.appswind.com/storage/page/6/global-demo.png",
  video: "",
  visible: true,

  globalReach: {
    title: `Global Reach Snapshot`,
    subtitle: null,
    excerpt: `At Smart Lab Global, our presence spans continents—enabling us to serve clients with agility, cultural intelligence, and local expertise. Our global footprint reflects our commitment to delivering world-class technology solutions, wherever innovation is needed.`,
    description: null,
    cover: "https://smartlab-api.appswind.com/storage/page/6/global-demo.png",
    coverSd: null,
  },

  featuredClient: {
    title: "featured Client Highlight",
    subtitle: null,
    excerpt: "",
    description: null,
    cover: null,
    coverSd: null,
    items: [
      {
        title: "",
        subtitle: "",
        slug: "cyber-security",
        excerpt: `Smart Lab Global partnered with Vivasoft to modernize their cloud infrastructure, enabling seamless scalability and performance optimization. By integrating DevOps automation and real-time monitoring tools, we reduced deployment time by 40% and enhanced system reliability across their digital products.`,
        content: null,
        cover:
          "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
        coverSd:
          "https://smartlab-api.appswind.com/storage/page/55/vivasoft-logo-1.png",
      },
      {
        title: "",
        subtitle: "",
        slug: "cyber-security",
        excerpt: `Smart Lab Global partnered with Vivasoft to modernize their cloud infrastructure, enabling seamless scalability and performance optimization. By integrating DevOps automation and real-time monitoring tools, we reduced deployment time by 40% and enhanced system reliability across their digital products.`,
        content: null,
        cover:
          "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
        coverSd:
          "https://smartlab-api.appswind.com/storage/page/55/vivasoft-logo-1.png",
      },
      {
        title: "",
        subtitle: "",
        slug: "cyber-security",
        excerpt: `Smart Lab Global partnered with Vivasoft to modernize their cloud infrastructure, enabling seamless scalability and performance optimization. By integrating DevOps automation and real-time monitoring tools, we reduced deployment time by 40% and enhanced system reliability across their digital products.`,
        content: null,
        cover:
          "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
        coverSd:
          "https://smartlab-api.appswind.com/storage/page/55/vivasoft-logo-1.png",
      },
      {
        title: "",
        subtitle: "",
        slug: "cyber-security",
        excerpt: `Smart Lab Global partnered with Vivasoft to modernize their cloud infrastructure, enabling seamless scalability and performance optimization. By integrating DevOps automation and real-time monitoring tools, we reduced deployment time by 40% and enhanced system reliability across their digital products.`,
        content: null,
        cover:
          "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
        coverSd:
          "https://smartlab-api.appswind.com/storage/page/55/vivasoft-logo-1.png",
      },
    ],
  },
  // approach: {
  //   title: `Our <br/> Approach`,
  //   subtitle: null,
  //   excerpt: "",
  //   description: null,
  //   cover:
  //     "https://smartlab-api.appswind.com/storage/section/46/home_spark.jpg",
  //   coverSd: null,
  //   items: [
  //     {
  //       title: "Discover",
  //       subtitle: "",
  //       slug: "cyber-security",
  //       content: null,
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Strategize",
  //       subtitle: "",
  //       slug: "artificial-intelligence",
  //       content: null,
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/8/capability2.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Develop",
  //       subtitle: "",
  //       slug: "data-analytics-ml",
  //       content: null,
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/9/capability3.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Deploy",
  //       subtitle: "",
  //       slug: "artificial-intelligence",
  //       content: null,
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/8/capability2.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Optimize",
  //       subtitle: "",
  //       slug: "data-analytics-ml",
  //       content: null,
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/9/capability3.jpg",
  //       coverSd: null,
  //     },
  //   ],
  // },
  // focusArea: {
  //   title: `Areas of Focus`,
  //   subtitle: null,
  //   excerpt:
  //     "We work across a diverse range of industries, bringing deep domain knowledge and adaptable solutions to every challenge. From emerging startups to established enterprises, we tailor our approach to meet the unique demands of each sector we serve.",
  //   description: null,
  //   cover:
  //     "https://smartlab-api.appswind.com/storage/section/46/home_spark.jpg",
  //   coverSd: null,
  //   items: [
  //     {
  //       title: "Telecommunications",
  //       subtitle: "",
  //       slug: "cyber-security",
  //       excerpt:
  //         "Automate IVR systems, improve call handling with intelligent voice agents, and expand communication with conversational AI.",
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "E-commerce & Retail",
  //       subtitle: "",
  //       slug: "cyber-security",
  //       excerpt:
  //         "Automate IVR systems, improve call handling with intelligent voice agents, and expand communication with conversational AI.",
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Public Sector",
  //       subtitle: "",
  //       slug: "cyber-security",
  //       excerpt:
  //         "Automate IVR systems, improve call handling with intelligent voice agents, and expand communication with conversational AI.",
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Financial Services",
  //       subtitle: "",
  //       slug: "cyber-security",
  //       excerpt:
  //         "Automate IVR systems, improve call handling with intelligent voice agents, and expand communication with conversational AI.",
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Healthcare",
  //       subtitle: "",
  //       slug: "cyber-security",
  //       excerpt:
  //         "Offer individualized shopping experiences, use conversational commerce to increase sales, and automate customer support.",
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Education & Training",
  //       subtitle: "",
  //       slug: "cyber-security",
  //       excerpt:
  //         "Enhance public communication, expedite citizen services, and enable transparent governance via AI-powered platforms.",
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Gaming & Interactive Media",
  //       subtitle: "",
  //       slug: "cyber-security",
  //       excerpt:
  //         "AI-driven tests can be used to personalize learning, automate administrative work, and facilitate intelligentcontent creation.",
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Gaming & Interactive Media",
  //       subtitle: "",
  //       slug: "cyber-security",
  //       excerpt:
  //         "Create voice-interactive gaming experiences, use real data to improve game immersion, and power dynamic storytelling.",
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Logistics & Supply Chain",
  //       subtitle: "",
  //       slug: "cyber-security",
  //       excerpt:
  //         "Make the most of real-time AI insights for inventory management, demand forecasting, and route planning..",
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
  //       coverSd: null,
  //     },
  //   ],
  // },

  // capabilities: {
  //   title: "Capabilities",
  //   subtitle: null,
  //   excerpt:
  //     "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
  //   description: null,
  //   cover: null,
  //   coverSd: null,
  //   items: [
  //     {
  //       title: "Cyber Security",
  //       subtitle:
  //         "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
  //       slug: "cyber-security",
  //       excerpt: null,
  //       content: null,
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Artificial Intelligence",
  //       subtitle:
  //         "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
  //       slug: "artificial-intelligence",
  //       excerpt: null,
  //       content: null,
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/8/capability2.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Data Analytics & ML",
  //       subtitle:
  //         "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
  //       slug: "data-analytics-ml",
  //       excerpt: null,
  //       content: null,
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/9/capability3.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Immersive Technologies (AR/VR 3D Gaming)",
  //       subtitle: null,
  //       slug: "immersive-technologies-ar-vr-3d-gaming",
  //       excerpt:
  //         "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
  //       content: null,
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/10/capability4.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Software & App Development",
  //       subtitle:
  //         "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
  //       slug: "software-app-development",
  //       excerpt: null,
  //       content: null,
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/11/capability5.jpg",
  //       coverSd: null,
  //     },
  //     {
  //       title: "Staff Augmentation",
  //       subtitle:
  //         "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
  //       slug: "staff-augmentation",
  //       excerpt: null,
  //       content: null,
  //       cover:
  //         "https://smartlab-api.appswind.com/storage/capability/12/capability6.jpg",
  //       coverSd: null,
  //     },
  //   ],
  // },
  // sprint: {
  //   title:
  //     'Sprint to Scale  <br />  <span class="red-text">with Smart-Lab Global</span>',
  //   subtitle: null,
  //   excerpt:
  //     '<ul class="flex flex-col gap-2 list-disc list-inside mb-4 ml-4">\r\n                <li>We don\'t just keep up with change — we drive it forward, fearlessly.</li>\r\n                <li>From complexity to clarity — we power the journey of transformation.</li>\r\n                <li>From complexity to clarity — we power the journey of transformation.</li>\r\n                <li>Technology is built around people. Progress is designed around you.</li>\r\n            </ul>\r\n            Turn ideas into impact across industries and borders.',
  //   description: null,
  //   cover:
  //     "https://smartlab-api.appswind.com/storage/section/24/home_sprint.jpg",
  //   coverSd: null,
  // },
  // industries: {
  //   title: "Industries we serve",
  //   subtitle: null,
  //   excerpt:
  //     "With a footprint in over 7+ industries, we bring expertise from finance and telecom to media and beyond, that elevates businesses to new heights.",
  //   description: null,
  //   cover: null,
  //   coverSd: null,
  //   items: dummyIndustries,
  // },
  // sustainable: {
  //   title: "Shaping a  <br />  Sustainable Future",
  //   subtitle: null,
  //   excerpt:
  //     '<div class="flex mb-[35px]">\r\n  <div class="w-[50%] max-w-[250px] pr-[5%]">\r\n                            <p class="lg:text-[30px] text-[24px]">30%</p>\r\n                            <p class="content-text">reduction in data center energy consumption in 2023.</p>\r\n                        </div>\r\n                        <div class="w-[50%] max-w-[250px] border-l border-[#41404233] pl-[5%]">\r\n                            <p class="lg:text-[30px] text-[24px]">30%</p>\r\n                            <p class="content-text">reduction in data center energy consumption in 2023.</p>\r\n                        </div>\r\n                    </div>\r\n                    <p class="mb-10 content-text">Take the next step towards sustainability</p>',
  //   description:
  //     "Shaping a                         <br />                         Sustainable Future",
  //   cover:
  //     "https://smartlab-api.appswind.com/storage/section/45/home_sustainableFuture.jpg",
  //   coverSd: null,
  // },
  // spotlight: {
  //   title: "Spotlight on Smart-Lab Global Insights",
  //   subtitle: null,
  //   excerpt:
  //     "With a footprint in over 7+ industries, we bring expertise from finance and telecom to media and beyond, that elevates businesses to new heights.",
  //   description: null,
  //   cover: null,
  //   coverSd: null,
  //   items: dummySpotlight,
  // },
  // case_studies: {
  //   items: dummyCaseStudies,
  // },
  // spark: {
  //   title: "Spark",
  //   subtitle: null,
  //   excerpt:
  //     'The inspiration behind our brand is "Spark." It symbolizes our innovative, creative, and transformative culture, which spurs advancement and opens up new opportunities for companies and sectors. "Spark" propels the future by pushing the envelope to produce enduring influence and constructive change.',
  //   description: null,
  //   cover:
  //     "https://smartlab-api.appswind.com/storage/section/46/home_spark.jpg",
  //   coverSd: null,
  // },
  // explore: {
  //   items: dummyExploreItems,
  // },
};

export default portfolioData;

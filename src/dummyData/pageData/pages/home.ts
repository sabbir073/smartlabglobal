import {
  dummyCaseStudies,
  dummyExploreItems,
  dummyIndustries,
  dummySpotlight,
} from "../dummyList";

const homePageData = {
  title: "Home",
  slug: "home",
  breadcrumb: [
    {
      title: "Home",
      slug: "home",
    },
  ],
  excerpt:
    "Committed to shaping the future of business, driving rapid transformation with lasting innovation and robust growth",
  content:
    '<div style="color: #d4d4d4; font-family: Consolas, \'Courier New\', monospace; font-size: 18px; white-space: pre;"><span style="color: #d4d4d4; font-family: Consolas, \'Courier New\', monospace; font-size: 18px; white-space: pre;">&lt;div&gt; &lt;h1 class=" font-medium lg:text-[2.5vw] text-[36px] mb-[1vw]"&gt;Sprint to S&lt;span class="font-semibold"&gt;c&lt;/span&gt;&lt;span class=" font-bold"&gt;a&lt;/span&gt;&lt;span class="font-extrabold"&gt;l&lt;/span&gt;&lt;span class="font-black"&gt;e&lt;/span&gt;&lt;/h1&gt; &lt;p class="2xl:max-w-[27.24vw] lg:max-w-[35vw] md:max-w-[50vw] max-w-[600px] mb-[2vw] content-text"&gt;Committed to shaping the future of business, driving rapid transformation with lasting innovation and robust growth.&lt;/p&gt; &lt;/div&gt;</span></div>',
  cover: "https://smartlab-api.appswind.com/storage/page/6/global-demo.png",
  video:
    "https://smartlab-api.appswind.com/storage/page/47/contactUsBanner.jpg",
  visible: true,

  capabilities: {
    title: "Capabilities",
    subtitle: null,
    excerpt:
      "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
    description: null,
    cover: null,
    coverSd: null,
    items: [
      {
        title: "Cyber Security",
        subtitle:
          "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
        slug: "cyber-security",
        excerpt: null,
        content: null,
        cover:
          "https://smartlab-api.appswind.com/storage/capability/7/capability1.jpg",
        coverSd: null,
      },
      {
        title: "Artificial Intelligence",
        subtitle:
          "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
        slug: "artificial-intelligence",
        excerpt: null,
        content: null,
        cover:
          "https://smartlab-api.appswind.com/storage/capability/8/capability2.jpg",
        coverSd: null,
      },
      {
        title: "Data Analytics & ML",
        subtitle:
          "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
        slug: "data-analytics-ml",
        excerpt: null,
        content: null,
        cover:
          "https://smartlab-api.appswind.com/storage/capability/9/capability3.jpg",
        coverSd: null,
      },
      {
        title: "Immersive Technologies (AR/VR 3D Gaming)",
        subtitle: null,
        slug: "immersive-technologies-ar-vr-3d-gaming",
        excerpt:
          "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
        content: null,
        cover:
          "https://smartlab-api.appswind.com/storage/capability/10/capability4.jpg",
        coverSd: null,
      },
      {
        title: "Software & App Development",
        subtitle:
          "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
        slug: "software-app-development",
        excerpt: null,
        content: null,
        cover:
          "https://smartlab-api.appswind.com/storage/capability/11/capability5.jpg",
        coverSd: null,
      },
      {
        title: "Staff Augmentation",
        subtitle:
          "Driving large-scale transformation with intuitive platforms and strategic technology, enabling businesses to innovate faster, operate smarter, and exceed expectations across every interaction and outcome.",
        slug: "staff-augmentation",
        excerpt: null,
        content: null,
        cover:
          "https://smartlab-api.appswind.com/storage/capability/12/capability6.jpg",
        coverSd: null,
      },
    ],
  },
  sprint: {
    title:
      'Sprint to Scale  <br />  <span class="red-text">with Smart-Lab Global</span>',
    subtitle: null,
    excerpt:
      '<ul class="flex flex-col gap-2 list-disc list-inside mb-4 ml-4">\r\n                <li>We don\'t just keep up with change — we drive it forward, fearlessly.</li>\r\n                <li>From complexity to clarity — we power the journey of transformation.</li>\r\n                <li>From complexity to clarity — we power the journey of transformation.</li>\r\n                <li>Technology is built around people. Progress is designed around you.</li>\r\n            </ul>\r\n            Turn ideas into impact across industries and borders.',
    description: null,
    cover:
      "https://smartlab-api.appswind.com/storage/section/24/home_sprint.jpg",
    coverSd: null,
  },
  industries: {
    title: "Industries we serve",
    subtitle: null,
    excerpt:
      "With a footprint in over 7+ industries, we bring expertise from finance and telecom to media and beyond, that elevates businesses to new heights.",
    description: null,
    cover: null,
    coverSd: null,
    items: dummyIndustries,
  },
  sustainable: {
    title: "Shaping a  <br />  Sustainable Future",
    subtitle: null,
    excerpt:
      '<div class="flex mb-[35px]">\r\n  <div class="w-[50%] max-w-[250px] pr-[5%]">\r\n                            <p class="lg:text-[30px] text-[24px]">30%</p>\r\n                            <p class="content-text">reduction in data center energy consumption in 2023.</p>\r\n                        </div>\r\n                        <div class="w-[50%] max-w-[250px] border-l border-[#41404233] pl-[5%]">\r\n                            <p class="lg:text-[30px] text-[24px]">30%</p>\r\n                            <p class="content-text">reduction in data center energy consumption in 2023.</p>\r\n                        </div>\r\n                    </div>\r\n                    <p class="mb-10 content-text">Take the next step towards sustainability</p>',
    description:
      "Shaping a                         <br />                         Sustainable Future",
    cover:
      "https://smartlab-api.appswind.com/storage/section/45/home_sustainableFuture.jpg",
    coverSd: null,
  },
  spotlight: {
    title: "Spotlight on Smart-Lab Global Insights",
    subtitle: null,
    excerpt:
      "With a footprint in over 7+ industries, we bring expertise from finance and telecom to media and beyond, that elevates businesses to new heights.",
    description: null,
    cover: null,
    coverSd: null,
    items: dummySpotlight,
  },
  case_studies: {
    items: dummyCaseStudies,
  },
  spark: {
    title: "Spark",
    subtitle: null,
    excerpt:
      'The inspiration behind our brand is "Spark." It symbolizes our innovative, creative, and transformative culture, which spurs advancement and opens up new opportunities for companies and sectors. "Spark" propels the future by pushing the envelope to produce enduring influence and constructive change.',
    description: null,
    cover:
      "https://smartlab-api.appswind.com/storage/section/46/home_spark.jpg",
    coverSd: null,
  },
  explore: {
    items: dummyExploreItems,
  },
};

export default homePageData;

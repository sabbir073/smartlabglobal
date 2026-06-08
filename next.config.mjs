/** @type {import('next').NextConfig} */

const SITE_URL = "https://smartlabglobal.com";

const nextConfig = {
  env: {
    BASE_URL: "https://smartlab-api.appswind.com/v1",
    SITE_URL: SITE_URL,
    API_CACHE_TIME: "0", /* Metrics in seconds */
  },
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "smartlab-api.appswind.com",
        port: "",
        pathname: "/**",
      },

    ],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;

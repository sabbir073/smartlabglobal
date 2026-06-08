import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /^font-.+$/,
    },
    {
      pattern: /^(m|mt|mb|ml|mr|mx|my|p|pt|pb|pl|pr|px|py)-/,
    },
    {
      pattern: /^(w|h)-/,
    },
    {
      pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
    },
    {
      pattern: /^text-(red|blue|green|yellow|gray|purple|pink|indigo|emerald|teal|cyan|orange|lime|amber|rose)-(\d{2,3})$/,
    },
    {
      pattern: /^bg-(red|blue|green|yellow|gray|purple|pink|indigo|emerald|teal|cyan|orange|lime|amber|rose)-(\d{2,3})$/,
    },

    'heading-1',
    'heading-2',
    'heading-3',
    'red-text',
    'quoteText',
    'section-py',
    'section-pt',
    'section-pb',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1660px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        banner_bar: "#FF4306"
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
  darkMode: "class"
};
export default config;

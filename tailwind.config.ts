import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Royal Cyber × Optimizely "free to grow" brand palette (light theme).
        // Token NAMES are kept stable so existing className usages keep working;
        // only the hex values were remapped from the old blue theme to green.
        rc: {
          blue: "#0c5a37", // deep Optimizely green — headings, table headers, active tab (white text)
          accent: "#177a43", // medium green — eyebrow text, focus border, links (AA on white)
        },
        lime: {
          DEFAULT: "#a5e635", // bright "grow" lime — header highlight / CTA
          ink: "#0c2e1c", // dark green text that sits on lime
        },
        opti: {
          navy: "#eef7f1", // was dark navy → now light mint surface
          panel: "#ffffff", // cards
          line: "#d6e7dc", // light green-gray borders
          ink: "#0f2418", // near-black green — primary text
          muted: "#5c6f64", // muted gray-green — secondary text
          accent: "#0e7a40", // Optimizely green — buttons (white text) & links
          teal: "#0f7a48", // green accent — section numbers / uppercase labels
          warn: "#b9741a", // amber (unchanged role)
          chip: "#eaf5ee", // light green chip background
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

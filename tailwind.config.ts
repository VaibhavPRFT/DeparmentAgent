import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Royal Cyber / Optimizely brand palette
        rc: {
          blue: "#0b3d91",
          accent: "#1e6fd9",
        },
        opti: {
          navy: "#0b1020",
          panel: "#121a30",
          line: "#243154",
          ink: "#eef2ff",
          muted: "#9fb0d6",
          accent: "#3b6cff",
          teal: "#00c2a8",
          warn: "#ffb454",
          chip: "#1b2746",
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#090A0C",
          surface: "#111215",
          "surface-light": "#18191E",
          card: "#121316",
          "card-hover": "#17181D",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(255, 87, 34, 0.4)",
          orange: "#FF5722",
          "orange-hover": "#FF6B35",
          "orange-dark": "#E64A19",
          "orange-light": "#FF8A65",
          "orange-subtle": "rgba(255, 87, 34, 0.12)",
          // Kept for legacy compatibility
          navy: "#090A0C",
          "navy-light": "#121316",
          "navy-border": "#1E2026",
          blue: "#FF5722",
          "blue-hover": "#FF6B35",
          accent: "#FF7043",
          "accent-soft": "#FFCCBC",
          light: "#F5F8FC",
          text: "#111827",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 12px 32px -4px rgba(255, 87, 34, 0.15)",
        glow: "0 0 25px -5px rgba(255, 87, 34, 0.35)",
        "glow-orange": "0 0 35px -5px rgba(255, 87, 34, 0.45)",
        "glow-orange-lg": "0 0 70px -10px rgba(255, 87, 34, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;

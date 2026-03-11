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
        cream: "#F8F6F2",
        "cream-dark": "#EDE9E1",
        gold: "#C9A227",
        "gold-light": "#E4C55A",
        "gold-dark": "#9E7D1B",
        "dark": "#222222",
        "dark-muted": "#555555",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        cormorant: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A227 0%, #E4C55A 50%, #C9A227 100%)",
        "dark-gradient": "linear-gradient(180deg, rgba(34,34,34,0) 0%, rgba(34,34,34,0.85) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "gold": "0 4px 24px rgba(201, 162, 39, 0.25)",
        "gold-lg": "0 8px 48px rgba(201, 162, 39, 0.35)",
        "luxury": "0 20px 60px rgba(34, 34, 34, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

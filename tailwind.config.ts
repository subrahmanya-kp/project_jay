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
        ivory: "#FAF8F5",
        champagne: "#F2E8D9",
        "warm-white": "#FFFDFB",
        slate: {
          deep: "#3D4F6B",
          mid: "#5A6E8C",
          light: "#8FA3BF",
          mist: "#E8EEF5",
        },
        gold: "#B8963E",
        ink: "#1C1C1E",
        muted: "#6B6B6B",
        border: "#E2DDD8",
        obsidian: "#0E0E0F",
        "surface-dark": "#161618",
        "surface-raised": "#1E1E21",
        mauve: "#b8a0c5",
        blush: "#e8dfe8",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "12px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(28,28,30,0.08), 0 4px 16px rgba(61,79,107,0.06)",
        "card-hover": "0 4px 12px rgba(28,28,30,0.1), 0 12px 32px rgba(61,79,107,0.1)",
        nav: "0 1px 0 rgba(28,28,30,0.08)",
        "card-dark": "0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.35)",
        "nav-dark": "0 1px 0 rgba(255,255,255,0.06)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "skin-texture": "url('/svg/skin-texture.svg')",
        "hex-pattern": "url('/svg/hex-pattern.svg')",
      },
    },
  },
  plugins: [],
};

export default config;

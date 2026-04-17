import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0040e0",
        "on-primary": "#ffffff",
        "primary-container": "#2e5bff",
        "on-primary-fixed": "#001356",
        "secondary-container": "#fe9d00",
        "on-secondary-container": "#663c00",
        secondary: "#885200",
        "on-secondary": "#ffffff",
        surface: "#f8f9fa",
        "surface-container-low": "#f3f4f5",
        "surface-container": "#edeeef",
        "surface-container-high": "#e7e8e9",
        "surface-container-highest": "#e1e3e4",
        "surface-variant": "#e1e3e4",
        "surface-bright": "#f8f9fa",
        "on-surface": "#191c1d",
        "on-surface-variant": "#434656",
        "on-background": "#191c1d",
        background: "#f8f9fa",
        "outline-variant": "#c4c5d9",
        outline: "#747688",
        "inverse-primary": "#b8c3ff",
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        full: "9999px",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Be Vietnam Pro", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-slow": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        "marquee-slow": "marquee-slow 28s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "pop-in": "pop-in 0.5s ease forwards",
      },
      boxShadow: {
        brutal: "8px 8px 0px 0px rgba(0,0,0,1)",
        "brutal-sm": "4px 4px 0px 0px rgba(0,0,0,1)",
        "brutal-gold": "8px 8px 0px 0px #fe9d00",
        "brutal-blue": "8px 8px 0px 0px #0040e0",
      },
    },
  },
  plugins: [],
};

export default config;

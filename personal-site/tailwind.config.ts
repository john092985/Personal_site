import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f7f5f1",
        surface: "#ffffff",
        ink: "#161616",
        muted: "#5f5f5f",
        border: "#d8d6d1",
        accent: "#ece8e1",
      },
      boxShadow: {
        card: "0 18px 40px rgba(17, 17, 17, 0.06)",
      },
      fontFamily: {
        sans: ["Avenir Next", "Inter", "Segoe UI", "sans-serif"],
        serif: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;

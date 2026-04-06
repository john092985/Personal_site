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
        canvas: "#f7f3ec",
        surface: "#fffdf8",
        ink: "#1f2833",
        muted: "#5f6773",
        border: "#d6d0c6",
        accent: "#b8a57c",
        panel: "#f3ede4",
        fog: "#e6e0d6",
      },
      boxShadow: {
        card: "0 26px 60px rgba(109, 96, 74, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Segoe UI", "sans-serif"],
        serif: ["var(--font-serif)", "Iowan Old Style", "serif"],
      },
      maxWidth: {
        content: "78rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;

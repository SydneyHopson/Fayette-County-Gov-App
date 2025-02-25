import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["Menlo", "Monaco", "Consolas", "Courier New", "monospace"],
      },
      colors: {
        primary: "#003366", // Dark Blue (FCC Theme)
        secondary: "#006699", // Light Blue
        accent: "#cc0000", // Red
        background: "#ffffff",
        foreground: "#171717",
        grayLight: "#f8f9fa",
      },
    },
  },
  plugins: [],
};

export default config;

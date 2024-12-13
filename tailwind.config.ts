import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: "DM Sans, sans-serif",
      sans: "DM Sans, sans-serif",
    },
    extend: {
      spacing: {
        128: "32rem",
        160: "48rem",
      },
      colors: {
        black: "#161616",
        grass: {
          100: "#E7F69B",
          500: "#26F7FD",
          800: "#556508",
        },
        white: "#E9EBEE",
        ash: {
          100: "#A9B9BD",
          500: "#3A5359",
          900: "#010C0F",
        },
        error: "#B62A2A",
        success: "#2AA5C7",
      },
    },
  },
  plugins: [],
};
export default config;

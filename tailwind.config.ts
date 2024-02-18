import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "light-gray": "#f5f5f5",
      "dark-gray": "#333",
      "lighter-gray": "#f0f0f0",
      "medium-gray": "#555",
      ruby: "#e0115f",
      "dodger-blue": "#007bff",
      "white-smoke": "#f5f5f5",
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#6750A4",
        black: "#111111",
        gray100: "#7D7D7D",
        gray200: "#B8B8B8",
        gray300: "#D9D9D9",
        gray400: "#D7D7D7",
      },
    },
  },
  plugins: [],
};
export default config;

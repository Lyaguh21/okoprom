import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      secondColor: "#F4F5F8",
      buttonHover: "#cdced1",
      buttonActive: "#3a3b3a",
      textGray: "#757575",
      textBlack: "#161616",
    },
    fontFamily: {
      Golos: "Golos Text",
    },
    screens: {
      bigPhone: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
} satisfies Config;

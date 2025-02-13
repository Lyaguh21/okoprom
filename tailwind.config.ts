import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#FFF",

      secondColor: "#F4F5F8",
      buttonHover: "#cdced1",
      buttonActive: "#3a3b3a",

      textGray: "#757575",
      textLightGray: "#9F9F9F",
      textBlack: "#161616",
      textRed: "#ef4444",

      borderWhite: "#E9E9E9",
      borderBlack: "#36383C",
      sliderBg: "#202226",

      darkHeader: "#171616",
      darkBody: "#262626",
      darkMainButton: "#1f1f1f",
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

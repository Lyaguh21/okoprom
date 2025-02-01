/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      secondColor: "#F4F5F8",
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
};

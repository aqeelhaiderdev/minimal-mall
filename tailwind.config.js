/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      textFont: ["Blinker", "sans-serif"],
    },
    extend: {
      colors: {
        whiteColor: "#fff",
        darkGray: "#191919",
        lightGray: "#E9E9E9",
        blackColor: "#000",
        mainColor: "#D81414",
        overLayColor: "rgba(0,0,0,.3)",
        hoverOverLayColor: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

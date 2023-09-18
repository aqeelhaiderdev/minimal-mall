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
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        borderGray: "#c3c3c3",
      },
      backgroundImage: {
        triotree: "linear-gradient(101deg, #FFFFFF 38%, #F1FFDF 100%)",
      },
      screens: {
        custom1517: "1517px",
      },
    },
  },
  plugins: [],
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1512px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        borderGray: "#c3c3c3",
      },
      backgroundImage: {
        triotree: "linear-gradient(101deg, #FFFFFF 38%, #F1FFDF 100%)",
      },
    },
  },
};
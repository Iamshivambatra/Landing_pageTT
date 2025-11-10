/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
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
        triotree: "linear-gradient(101.02deg, #FFFFFF 37.92%, #F1FFDF 100.33%)",
      },
    },
  },
  plugins: [],
});

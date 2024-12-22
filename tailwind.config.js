const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
      },
      colors: {
        sky: colors.cyan,
        orange: colors.orange,
        yellow: colors.yellow,
      },
      minHeight: {
        "1/2": "50%",
      },
      maxHeight: {
        "80v": "80vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

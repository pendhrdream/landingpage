/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
        chakra: ['"Chakra Petch"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "layout-grid":
          "linear-gradient(90deg, rgba(78, 22, 152, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
        "btn-grid": "linear-gradient(102deg, #4B1790 37.53%, #D17BDF 93.59%)",
        "product-grid":
          "linear-gradient(94deg, #4B1790 39.69%, #D17BDF 123.54%)",
        "carousel-linear":
          "linear-gradient(102deg, #4B1790 37.53%, #D17BDF 93.59%)",
      },
      colors: {
        primary: "#0B1623",
        secondary: "#4B1790",
        "card-background": "rgba(255, 255, 255, 0.10)",
        "brand-background": "rgba(255, 255, 255, 0.92)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".clip-text": {
          "-webkit-background-clip": "text",
          "background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "text-fill-color": "transparent",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
});

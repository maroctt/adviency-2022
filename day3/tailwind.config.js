/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "c-red": "#b80f12",
      "c-green": "#799c58",
      "c-green-900": "#5B7642",
      "c-skye": "#d8e5df",
      "c-beige": "#fceec8",
      "c-black": "#191919",
    },
    fontFamily: {
      Alexandria: ["Alexandria", "sans-serif"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern":
          "linear-gradient(to left top, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9))",
        "after-pattern": "url('/src/assets/bg-1.jpg')",
      },
    },
    colors: {
      "c-red": "#b80f12",
      "c-green": "#799c58",
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

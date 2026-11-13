/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        swiggy: {
          DEFAULT: "#fc8019",
          hover: "#e56c07",
          dark: "#d45e03",
        },
      },
    },
  },
  plugins: [],
};

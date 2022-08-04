/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "img-bg": "url('/src/assets/images/img-bg.png')",
      },
    },
  },
  plugins: [],
};

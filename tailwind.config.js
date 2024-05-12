/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hijau: "#C9D32C",
        background: "#FAFBE6",
        biru: "#25396F",
      },
      fontFamily: {
        popins: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
};

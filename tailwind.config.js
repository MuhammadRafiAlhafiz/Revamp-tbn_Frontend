/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    daisyui: {
      themes: ["light"],
    },
    extend: {
      colors: {
        hijau: "#C9D32C",
        background: "#FAFBE6",
        biru: "#25396F",
        graybg: "#D1D2AD",
      },
      fontFamily: {
        popins: ["Poppins, sans-serif"],
        nunito: ["Nunito, sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

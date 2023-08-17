/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ForestGreen: {
          100: "#93A891",
          300: "#468442",
          500: "#286C23",
          700: "#164712",
          900: "#0C2B0A",
        },
      },
    },
  },
  plugins: [],
};

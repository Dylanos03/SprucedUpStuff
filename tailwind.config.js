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
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "sliding-left": "slideLeft 8s linear infinite",
      },
    },
  },
  plugins: [],
};

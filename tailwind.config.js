/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 1. Animation Config
      animation: {
        wave: "wave 1.5s infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(14deg)" },
          "50%": { transform: "rotate(-8deg)" },
          "75%": { transform: "rotate(14deg)" },
        },
      },

      // 2. Font Config
      fontFamily: {
        sans: [
          "Vazirmatn",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

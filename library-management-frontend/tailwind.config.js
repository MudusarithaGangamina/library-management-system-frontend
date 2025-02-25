/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      mm: "375px",
      sm: "425px",
      sd: "575px",
      md: "768px",
      lg: "800px",
      xl: "1024px",
      "2xl": "1200px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}


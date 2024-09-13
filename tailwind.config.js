/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        "panther" : "#1d1c21",
        "captain" : "#0064fa"
      }
    },
  },
  plugins: [],
}


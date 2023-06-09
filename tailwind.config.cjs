/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary:"#676767",
        light:"rgba(255, 255, 255, 0.5)",
        
      }
    },
  },
  plugins: [],
}
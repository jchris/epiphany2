/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Arial', 'sans-serif'],
    },
  },
  plugins: [],
}
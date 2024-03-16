/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': 'hsl(218, 23%, 16%)',
        'sub': 'hsl(150, 100%, 66%)',
        'card': 'hsl(217, 19%, 24%)',
        'cardFont': 'hsl(217, 19%, 38%)',
        "fontColor": '#CDE3E8'
      }
    },
  },
  plugins: [],
}
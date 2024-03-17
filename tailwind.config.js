/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 30px 0px rgba(82, 255, 68, 1)'
      },
      colors: {
        'main': 'hsl(218, 23%, 16%)',
        'sub': 'hsl(150, 100%, 66%)',
        'card': 'hsl(217, 19%, 24%)',
        'cardFont': 'hsl(217, 19%, 38%)',
        "fontColor": '#CDE3E8',
        'btnColor': 'hsl(150, 100%, 66%)',
      }
    },
  },
  plugins: [],
}
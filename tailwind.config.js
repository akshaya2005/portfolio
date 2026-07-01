/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        masthead: ['"Old English Text MT"', 'serif'],
        display:  ['"Cheltenham"', 'serif'],
        body:     ['"Cheltenham"', 'serif'],
        sans:     ['"Inter"', 'sans-serif'],
      },
      colors: {
        ink:     '#121212',
        paper:   '#FAF9F6',
        rule:    '#C8C0B4',
        accent:  '#B5222A',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBG: '#F1FBFF',
        primary: '#009EDE',
        secondary: "#1BA2D4",
        grayFooter: '#797979'
      },
      fontFamily: {
        nastaleeqKasheeda: ['"Jameel Noori Nastaleeq Kasheeda"', 'serif'],
        nastaleeqRegular: ['"Jameel Noori Nastaleeq Regular"', 'serif'],
        alMajeed: ['"Al Majeed Quranic Font Regular"', 'serif'],
      },
    },
  },
  plugins: [],
};

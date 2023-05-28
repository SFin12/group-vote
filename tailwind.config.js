/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary': '#2ecc40',
        'secondary': '#a1abb7',
    },
  },
},
  plugins: [],
}


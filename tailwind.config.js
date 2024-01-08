/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'black': '#191919',
      'white': '#F2F2F2',
      'h-fon': 'rgba(255, 255, 255, 0.20)',
      'blue': '#838FFE',
      'gr-second': '#D4B6FC',
      'purple': '#B2BAFF',
    },
    backgroundImage: {
      'fon': "url('/src/img/fon.png')",
      'fon-lg': "url('/src/img/fon-lg.png')",
      'fon-xl': "url('/src/img/fon-xl.png')",
      'fon-3xl': "url('/src/img/fon-3xl.png')",
      'projects': "url('/src/img/projects.jpg')",
    },
    screens: {
      'mob': '375px',
      'mobx': '425px',
      'sm': '640px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    boxShadow: {
      'button': '1px -2px 5px 0px rgba(207, 207, 207, 0.10) inset, 6px -7px 9px 0px rgba(207, 207, 207, 0.09) inset, 13px -16px 12px 0px rgba(207, 207, 207, 0.05) inset, 24px -28px 15px 0px rgba(207, 207, 207, 0.01) inset, 37px -44px 16px 0px rgba(207, 207, 207, 0.00) inset',
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'myGray':'#292A2A',
        'myOrange':'#F15A29'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes:false,
  },
}
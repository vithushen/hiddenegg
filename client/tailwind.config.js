/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      BlackOps:["Black Ops One", "sans-serif"],
      Creepster:["Creepster", "sans-serif"],

    }

  },
  plugins: [
    require('daisyui'),
  ],
}
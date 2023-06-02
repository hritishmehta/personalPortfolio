/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: ['Playfair'],
        combo: ['Combo-Regular'],
        amagro: ['Amagro']
      }
    },
  },
  plugins: [],
}


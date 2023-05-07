/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        andika: ['Andika', 'sans-serif']
      },
      cursor: {
        'fancy': 'url(/assets/pointer.svg), auto',
        'fancy-hand': 'url(/assets/hand_pointer.svg), auto',
      }
    },
  },
  plugins: [],
}


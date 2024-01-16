/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        play: ["Playpen Sans", "sans-serif"]
      },
      cursor: {
        fancy: "url(/assets/pointer.svg), auto",
        "fancy-hand": "url(/assets/hand_pointer.svg), auto",
      },
    },
  },
  plugins: [],
};

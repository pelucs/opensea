/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },
      backgroundImage: {
        bg: "url(/public/assets/bg.png)",
        buttonPrev: "url(/public/assets/button-prev.png)",
        buttonNext: "url(/public/assets/button-next.png)"
      }
    },
  },
  plugins: [],
}


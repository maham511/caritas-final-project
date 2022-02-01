/* eslint-disable */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["'Lato', sans-serif"],
      },
      colors: {
        'dark-grey': '#4a4f53',
        textOnhover: '#2563eb',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

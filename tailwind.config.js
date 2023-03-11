/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
        customBlue: '#0B1757',
      },
      textColor: {
        customBlue: '#0B1757',
        customWhite: '#D9D9D9'
      },
      height: {
        660: '660px',
      },
      backgroundImage: {
        herosection: 'url(./assets/image1.png)'
      },
      outlineColor: {
        customGray: '#B3B3B3',
        customBlue: '#0B1757'
      }
    },
  },
  plugins: [],
}

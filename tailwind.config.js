/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
        customBlue: '#0B1757',
        customGray: '#F0F0F0',
        bg: '#FAFAFA'
      },
      textColor: {
        customBlue: '#0B1757',
        customWhite: '#D9D9D9',
        customGold: '#FFAD0E'
      },
      height: {
        660: '660px',
        235: '235px',
        345: '345px',
        53: '53px',
        52: '50px',
        65: '65px',
        91: '91px',
        508: '254px'
      },
      width: {
        70: '70px',
        96: '96px',
        348: '348px',
        300: '300px',
        376: '365px',
        350: '350px',
        390: '390px',
        450: '450px',
        200: '200px',
        548: '548px',
        400: '460px',
        580: '580px',
        95: '95%',
        90: '90%',
        80: '80%',
        200: '200%',
        400:"400%"

      },
      maxWidth: {
        476: '476px'
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
        customBlue: '#0B1757'
      }
    },
  },
  plugins: [],
}

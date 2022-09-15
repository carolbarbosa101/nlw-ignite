/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: { },
      backgroundImage: {
        galaxy: "url('/background_galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 35.08%, #43E7AD 40.94%, #E1D55D 10%)',
        'game-gradiente': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.08%)'
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          800: 'rgb(126, 211, 33)',
        },
        pink: {
          800: '#e990f9',
        },
        gray: {
          100: 'rgb(234,234,234)',
          500: '#b0b0b0',
          800: 'rgb(151,151,151)',
        },
      },
    },
  },
  plugins: [],
};

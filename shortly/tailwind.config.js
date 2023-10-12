module.exports = {
  content: ['./*.html', './js/script.js'],
  theme: {
    extend: {
      colors: {
        red: 'hsl(0, 87%, 67%)',
        cyan: 'hsl(180, 66%, 49%)',
        lightCyan: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        lightGray: 'hsl(257, 7%, 63%)',
        darkGray: 'hsl(255, 11%, 22%)',
        darkerGray: 'hsl(260, 8%, 14%)',
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      spacing: {
        180: '32rem',
      },
    },
  },
  plugins: [],
};

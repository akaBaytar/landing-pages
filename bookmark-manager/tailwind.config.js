module.exports = {
  content: ['./*.html', './*.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        softRed: 'hsl(0, 94%, 66%)',
        softBlue: 'hsl(231, 69%, 60%)',
        darkBlue: 'hsl(229, 31%, 21%)',
        lightGray: 'hsl(229, 8%, 60%)',
      },

      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

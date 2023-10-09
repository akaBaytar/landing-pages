module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkGray: 'hsl(210, 10%, 33%)',
        lightGray: 'hsl(201, 11%, 66%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        lightGreen: 'hsl(171, 66%, 44%)',
      },

      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },

      backgroundImage: {
        'hero-bg-desktop': 'url("../assets/bg-desktop.png")',
        'hero-bg-mobile': 'url("../assets/bg-mobile.png")',
      },
    },
  },
  plugins: [],
};

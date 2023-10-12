module.exports = {
  content: ['./*.html', './*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(216, 53%, 9%)', //darkblue2
        darkGray: 'hsl(217, 28%, 15%)', //darkblue
        darkerGray: 'hsl(218, 28%, 13%)', //darkblue1
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
      },

      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },

      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
        'logo-light-mode': "url('../images/logo-light-mode.svg')",
        'dark-mode': "url('../images/background/dark-mode.svg')",
        'light-mode': "url('../images/background/light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
};

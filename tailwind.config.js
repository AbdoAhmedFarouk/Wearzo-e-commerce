/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxxxs: '288px',

      xxxs: '376px',

      xxs: '481px',

      xs: '576px',

      sm: '768px',

      md: '992px',

      lg: '1200px',

      xl: '1341px',

      '2xl': '1441px',
    },

    fontFamily: {
      sans: 'Jost, sans-serif',
    },

    extend: {
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: 0,
            visibility: 'hidden',
            transform: 'translateY(50px)',
          },
          '100%': {
            opactiy: 1,
            visibility: 'visible',
            transform: 'translateY(0)',
          },
        },
      },

      height: {
        screen: '100dvh',
      },

      colors: {
        primaryColor: '#222222',
        secondaryColor: '#777777',
        thirdColor: '#ff4040',
        fourthColor: '#e5e5e5',
        fifthColor: '#f7f7f7;',
        sixColor: '#333333;',
        seventhColor: '#ebebeb;',
        eighthColor: '#ffb503;',
      },

      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle, #222 0%, #ff4040 50%, transparent 60%, transparent 100%);',
      },
    },
  },
  plugins: [],
};

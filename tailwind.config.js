/** @type {import('tailwindcss').Config} */

export default {
  content: ['./*.html', './client/**/*.[tj]sx'],
  media: false,
  theme: {
    extend: {
      typography: {
        default: {
          css: {
            h1: {
              fontFamily: ['Rubik', 'sans-serif'],
              fontWeight: '500',
              fontSize: '40px',
            },
            h2: {
              fontFamily: ['Rubik', 'sans-serif'],
              fontWeight: '400',
              fontSize: '30px',
            },
            p: {
              fontFamily: ['Rubik', 'sans-serif'],
              fontWeight: '300',
              fontSize: '18px',
              leading: 'loose',
            },
            boxShadow: {},
          },
        },
        variants: {
          extend: {},
        },

        plugins: [require('@tailwindcss/typography')],
      },
      spacing: {
        padding: '40px',
      },
      animation: {
        flip: 'flip 6s infinite steps(2, end)',
        rotate: 'rotate 3s linear infinite both',
      },
      keyframes: {
        flip: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        rotate: {
          to: {
            transform: 'rotate(90deg)',
          },
        },
      },
      colors: {},
    },
  },
}

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./*.html', './client/**/*.[tj]sx'],
  media: false,
  theme: {
    extend: {
      colors: {},
      fontFamily: {},
      boxShadow: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-uppercase': {
          textTransform: 'uppercase',
          color: 'white',
          fontWeight: 'bold',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

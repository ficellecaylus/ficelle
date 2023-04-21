/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md", "./content/**/*.html", "./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
      },
      colors: {
        mycolor: {
          25: '#FBF6F7',
          50: '#F3E5E7',
          100: '#e8cdd2',
          200: '#c7848e',
          300: '#b15261',
          400: '#9b2134',
          500: '#90091e',
          600: '#81081b',
          700: '#730718',
          800: '#640615',
          900: '#48040f',

        DEFAULT: '#90091e',
        },
      },

      
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md", "./content/**/*.html", "./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
      }
    }
  },
  plugins: [],
}


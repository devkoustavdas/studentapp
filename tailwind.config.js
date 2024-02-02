/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sl': '880px',
        '3xl': '1600px',
        '4xl': '1800px',
      },
      colors: {
        'bl': '#007494',
      }
    },
    fontFamily: {
      'title': ["'Source Sans Pro', sans-serif"],
      'serif': ['"Barlow", sans-serif'],
      'cursive': ["'Courgette', sans-serif"],
    },
  },
  plugins: [],
}


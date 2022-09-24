/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#16181b',
      },
    },
    fontFamily: {
      'Poppins' : ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}

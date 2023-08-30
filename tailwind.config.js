/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      width: {
        '480':'30rem',
      },
      height: {
        '480':'30rem',
      }
    },
  },
  plugins: [],
}
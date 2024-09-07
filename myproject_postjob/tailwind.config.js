/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'sp_pro':['SP_Pro','sans-serif'],
      }
    },
  },
  plugins: [],
}


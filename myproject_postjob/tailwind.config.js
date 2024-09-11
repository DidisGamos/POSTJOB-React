/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      ssm: '375px',
      sm: '650px',
      md: '768px',
      lg: '1024px',
      xlg: '1200px',
      x2lg:'1530px',
    },
    extend: {
      fontFamily:{
        'RFDewi':['RFDewi','sans-serif'],
      }
    },
  },
  plugins: [],
}


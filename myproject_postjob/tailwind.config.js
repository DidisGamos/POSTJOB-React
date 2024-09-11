/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    fontSize: {
      xs:['12px','16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '48px'],
      '5xl': ['48px','60px'],
      '6xl': ['60px','72px'],
      '7xl': ['72px', '96px'],
      '8xl': ['96px', '128px'],
      '9xl':['128px','500px'],
    },
    screens: {
      ssm: '375px',
      sm: '650px',
      md: '768px',
      lg: '1024px',
      xlg: '1200px',
      '2xlg':'1530px',
    },
    extend: {
      fontFamily:{
        'SFProText':['SFProText','sans-serif'],
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        stratos: {
          50: '#E6F4FF',
          100: '#C9E8FF',
          200: '#ABDFFF',
          300: '#74CAFF',
          400: '#51B4FF',
          500: '#005BFF',
          600: '#003BFF',
          700: '#0026B7',
          800: '#001B7F',
          900: '#000C42',
        },
      },
    },
  },
  plugins: [],
};
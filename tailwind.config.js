const colors = {
  base: '#E0E8FF',
  blue: {
    light: '#766CF1',
    normal: '#382AE1',
  },
  grey: {
    'very-light': '#F7F9FF',
    light: '#717FA6',
    dark: '#1F2E55',
  },
}

/*
|-------------------------------------------------------------------------------
| Configuration
|-------------------------------------------------------------------------------
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      colors,
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
}

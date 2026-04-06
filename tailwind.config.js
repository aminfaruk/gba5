/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gba: {
          50:  '#faf5ff',
          100: '#f1dbff',
          200: '#dfb7ff',
          500: '#803abd',
          600: '#6b21a8',
          700: '#500088',
          800: '#3d0066',
          900: '#2d0050',
        },
        // Stitch design tokens
        surface: {
          DEFAULT: '#fcf9f8',
          dim: '#dcd9d9',
          low: '#f6f3f2',
          container: '#f0eded',
          high: '#eae7e7',
          highest: '#e5e2e1',
          lowest: '#ffffff',
        },
        on: {
          surface: '#1c1b1b',
          'surface-variant': '#4c4452',
        },
        outline: {
          DEFAULT: '#7e7383',
          variant: '#cfc2d4',
        },
        secondary: '#3b5ca5',
        tertiary: '#710005',
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        // Status colors
        status: {
          green: '#2e7d32',
          orange: '#ed6c02',
          red: '#d32f2f',
        },
      },
      fontFamily: {
        headline: ['Lexend', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'apex-red': '#e62b1e',
        'apex-black': '#121212',
        'apex-gray': '#2a2a2a',
        'apex-beige': '#d8c9a7',
        'apex-gold': '#d4af37',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-header': 'linear-gradient(to right, #2a2a2a, #d8c9a7)',
        'gradient-footer': 'linear-gradient(to bottom, #2a2a2a, #121212)',
      },
    },
  },
  plugins: [],
};
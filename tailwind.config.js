// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'float': 'float 20s linear infinite',
        },
        keyframes: {
          float: {
            '0%': { transform: 'translateY(0) translateX(0)' },
            '25%': { transform: 'translateY(-10px) translateX(10px)' },
            '50%': { transform: 'translateY(0) translateX(25px)' },
            '75%': { transform: 'translateY(10px) translateX(10px)' },
            '100%': { transform: 'translateY(0) translateX(0)' },
          }
        }
      }
    },
    plugins: [],
  }
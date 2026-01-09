/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4FF00',
        background: '#121212',
        'background-darker': '#0a0a0a',
        card: '#1E1E1E',
        text: '#FFFFFF',
        'text-muted': '#B0B0B0',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'zoom': 'zoomEffect 20s infinite alternate',
        'vertical-slide': 'verticalSlide 2.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomEffect: {
            'from': { transform: 'scale(1)' },
            'to': { transform: 'scale(1.1)' },
        },
        verticalSlide: {
            '0%': { transform: 'scale(1.1) translateY(-5%)' },
            '100%': { transform: 'scale(1.1) translateY(5%)' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        sand: '#F4EDE3',
        pine: '#1F5C50',
        ocean: '#0E7490',
        clay: '#C7663D',
        ink: '#1D2A31',
        mist: '#E7EEF0',
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        travel: '0 18px 45px rgba(14, 116, 144, 0.14)',
      },
      keyframes: {
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        riseIn: 'riseIn 700ms ease-out forwards',
      },
    },
  },
  plugins: [],
}


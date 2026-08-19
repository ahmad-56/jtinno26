/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        vermin: ['Vermin', 'sans-serif'],
      },
      colors: {
        electric: '#0c6177',
      },
      textShadow: {
        glow: '0 0 10px rgba(20, 148, 136, 0.35)',
      }
    },
  },
  plugins: [],
}

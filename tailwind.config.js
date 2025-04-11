/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#2d3748',
        accent: '#e53e3e',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'draw': 'draw 2s ease-in-out forwards',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        draw: {
          '0%': { strokeDasharray: '1000', strokeDashoffset: '1000' },
          '100%': { strokeDasharray: '1000', strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
} 
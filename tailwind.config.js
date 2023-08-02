import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['bg-grid', 'bg-side-bottom'],
  theme: {
    extend: {
      keyframes: {
        updown: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        updown: 'updown 5s ease-in-out infinite',
      },
      backgroundImage: {
        grid: "url('/bg-grid.svg')",
        'side-bottom': "url('/side-bottom.svg')",
      },
    },
  },
  plugins: [],
};

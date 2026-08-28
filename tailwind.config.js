/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        kosiix: {
          bg: '#050507',
          accent: '#00c8e0',
          text: '#ededed',
          muted: '#6b6b7b',
        }
      },
    },
  },
  plugins: [],
}
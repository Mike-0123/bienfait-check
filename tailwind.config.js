/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#fff',
        textColor: '#000',
        textColorTransparent: 'rgba(0, 0, 0, 0.9)',
        middleColor: 'grey',
        shineColor: '#54acc4'
      }
    },
  },
  plugins: [],
}
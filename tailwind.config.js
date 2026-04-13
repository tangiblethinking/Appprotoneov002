/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        ink:    '#080808',
        paper:  '#F4F1EA',
        chalk:  '#E8E4DB',
        zinc:   '#1A1A1A',
        mist:   '#8A8880',
        accent: '#C8FF00',
        warm:   '#FF6B35',
      },
    },
  },
  plugins: [],
}

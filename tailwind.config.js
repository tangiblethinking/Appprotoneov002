/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'Helvetica Neue', 'sans-serif'],
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
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1', letterSpacing: '0.12em' }],
        'xs':  ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.08em' }],
        'sm':  ['0.875rem', { lineHeight: '1.5' }],
        'base':['1rem',    { lineHeight: '1.65' }],
        'lg':  ['1.125rem',{ lineHeight: '1.5' }],
        'xl':  ['1.25rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem',  { lineHeight: '1.3' }],
        '3xl': ['2rem',    { lineHeight: '1.15' }],
        '4xl': ['2.75rem', { lineHeight: '1.05' }],
        '5xl': ['3.75rem', { lineHeight: '0.97', letterSpacing: '-0.025em' }],
        '6xl': ['5rem',    { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        '7xl': ['6.5rem',  { lineHeight: '0.93', letterSpacing: '-0.04em' }],
        '8xl': ['8.5rem',  { lineHeight: '0.9',  letterSpacing: '-0.045em' }],
      },
      spacing: {
        'section': '7rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
        'pill': '9999px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'draw':    'draw 1.2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        draw: {
          '0%':   { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      gridTemplateColumns: {
        'editorial': '1fr 2fr',
        'editorial-r': '2fr 1fr',
        'thirds': 'repeat(3, 1fr)',
      },
    },
  },
  plugins: [],
}

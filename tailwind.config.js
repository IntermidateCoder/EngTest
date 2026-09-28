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
        obsidian: '#09090b',
        midnight: '#121215',
        'card-dark': '#18181b',
        'parchment-border': '#27272a',
        'parchment-muted': '#3f3f46',
        'aged-gold': {
          DEFAULT: '#d97706',
          light: '#f59e0b',
          dark: '#b45309',
          pale: '#fef3c7',
        },
        crimson: {
          DEFAULT: '#9f1239',
          dark: '#881337',
          bright: '#be123c',
          glow: '#fda4af',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'gothic-glow': '0 0 25px -5px rgba(159, 18, 57, 0.3)',
        'gold-glow': '0 0 25px -5px rgba(217, 119, 6, 0.25)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#3DBCB8',
          dark: '#0A2E2E',
          mid: '#1A4A4A',
        },
        brand: {
          bg: '#FFFFFF',
          'bg-cold': '#F7FAFA',
          text: '#0D1F1F',
          'text-secondary': '#6B8C8C',
          accent: '#0A2E2E',
          primary: '#3DBCB8',
        },
      },
      fontFamily: {
        heading: ['"DM Sans Variable"', '"DM Sans"', 'sans-serif'],
        body: ['"Inter Variable"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'draw': 'draw 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        draw: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'teal-sm': '0 2px 12px rgba(61, 188, 184, 0.12)',
        'teal-md': '0 4px 24px rgba(61, 188, 184, 0.18)',
        'card': '0 1px 3px rgba(13, 31, 31, 0.06), 0 4px 16px rgba(13, 31, 31, 0.04)',
        'card-hover': '0 4px 20px rgba(13, 31, 31, 0.1), 0 1px 4px rgba(61, 188, 184, 0.15)',
      },
      borderColor: {
        'teal-subtle': 'rgba(61, 188, 184, 0.2)',
        'teal-glass': 'rgba(61, 188, 184, 0.15)',
      },
      transitionDuration: {
        '600': '600ms',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta corporativa de CognytIA (sin cambios de valor)
        teal: {
          DEFAULT: '#3DBCB8', // primario
          spark: '#1FB5B0',
          deep: '#0A2E2E',
          mid: '#1A4A4A',
          tint: '#E4F4F3',
        },
        word: '#606B77', // gris del logotipo "Cognyt"
        // Neutros del sistema "Human-Centered Industrial"
        // (variables CSS: cambian solas dentro de .theme-dark; ver index.css)
        paper: 'var(--paper)',
        panel: 'var(--panel)',
        ink: {
          DEFAULT: 'var(--ink)',
          soft: 'var(--ink-soft)',
          mute: 'var(--ink-mute)',
        },
        line: 'var(--line)',
      },
      fontFamily: {
        sans: ['"DM Sans Variable"', '"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

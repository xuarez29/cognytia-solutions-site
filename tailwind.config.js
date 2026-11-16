/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta del experimento "Electric Teal" (mismos valores que index.css)
        teal: {
          DEFAULT: '#00C4BA', // primario
          spark: '#009F98',
          deep: '#123638',
          mid: '#205455',
          tint: '#DDF7F4',
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

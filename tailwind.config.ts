import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: 'rgb(var(--color-void) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        elevated: 'rgb(var(--color-elevated) / <alpha-value>)',
        vermillion: 'rgb(var(--color-accent) / <alpha-value>)',
        ember: 'rgb(var(--color-accent-hover) / <alpha-value>)',
        bone: 'rgb(var(--color-text-primary) / <alpha-value>)',
        ash: 'rgb(var(--color-text-secondary) / <alpha-value>)',
        smoke: 'rgb(var(--color-text-muted) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Clash Display"', '"Noto Kufi Arabic"', 'sans-serif'],
        body: ['"Cabinet Grotesk"', '"Noto Kufi Arabic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

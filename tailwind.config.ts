import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        surface: '#0A0A0A',
        elevated: '#111111',
        vermillion: '#FF3D00',
        ember: '#FF6B35',
        bone: '#F0EBE3',
        ash: '#888888',
        smoke: '#444444',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['"Cabinet Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

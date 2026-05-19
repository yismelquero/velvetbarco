import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#1B4332',
        charcoal: '#1A1A1A',
        ivory: '#F5F5F0',
        'soft-gold': '#C9A84C',
        taupe: '#B8A98A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        optima: ['Optima', 'Gill Sans', 'Gill Sans MT', 'Calibri', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'iso-black':  '#0C0809',
        'iso-dark':   '#16100F',
        'iso-card':   '#1F1516',
        'iso-border': '#2D1E21',
        'iso-plum':   '#3D2430',
        'iso-rose':   '#C9A0AB',
        'iso-blush':  '#F0E3DF',
        'iso-muted':  '#8F747A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config

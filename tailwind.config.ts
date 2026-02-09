import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffef7',
          100: '#fffceb',
          200: '#fff8d1',
          300: '#fff2a8',
          400: '#ffe875',
          500: '#ffd700',
          600: '#e6c200',
          700: '#cc9900',
          800: '#b38600',
          900: '#996600',
        },
        dark: {
          50: '#1a1a1a',
          100: '#0d0d0d',
          200: '#000000',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

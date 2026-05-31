import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm, small-batch storefront palette.
        brand: {
          50: '#fbf6f2',
          100: '#f5e9df',
          200: '#ead0bd',
          300: '#dcb094',
          400: '#cd8d6a',
          500: '#bf724b',
          600: '#a85b3c',
          700: '#8a4733',
          800: '#703c2f',
          900: '#5d3429',
        },
        sage: {
          100: '#eef2ec',
          300: '#bcccb3',
          500: '#7f9a72',
          700: '#566b4c',
        },
        ink: '#241f1b',
        cream: '#fbf8f4',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: { content: '1180px' },
    },
  },
  plugins: [],
};

export default config;

import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#A0D468', //basic
        primary2: '#79BE2D', //dark
        primary3: '#CBE9AC', //light
        gray1: '#F2F4F6',
        gray2: '#6B7684',
        gray3: '#333D48',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '50%',
          },
        },
      },
    },
  },

  plugins: [
    typography,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar::-webkit-scrollbar': {
          width: '12px',
        },
        '.scrollbar::-webkit-scrollbar-track': {
          borderRadius: '100vh',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#A0D468',
          borderRadius: '100vh',
          cursor: 'pointer',
          backgroundClip: 'padding-box',
          border: '3px solid transparent',
        },
        '.scrollbar::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#79BE2D',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    }),
  ],
} satisfies Config;

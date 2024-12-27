import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

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
        primary: '#A0D468',
        darkGray: '#333D48',
        lightGray: '#6B7684',
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

  plugins: [typography],
} satisfies Config;

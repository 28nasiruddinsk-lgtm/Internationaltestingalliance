import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0E2240',
        blue: '#0B4CA1',
        sky: '#8DB8EE',
        tint: '#EEF3FA',
        line: '#DCE3EC',
        ink: '#14202E',
        body: '#46505C',
        muted: '#5F6975',
      },
      fontFamily: {
        serif: ['var(--font-caslon)', 'Georgia', 'serif'],
        sans: ['var(--font-open-sans)', 'Arial', 'sans-serif'],
      },
    },
  },
} satisfies Config;

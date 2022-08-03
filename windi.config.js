import { defineConfig } from 'windicss/helpers'

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
  darkMode: 'media',
  safelist: [
    range(3).map(i => `p-${i}`), // p-1 to p-3
    range(10).map(i => `mt-${i}`),
    range(10).map(i => `mr-${i}`),
    range(10).map(i => `mt-${i}`),
    range(10).map(i => `mb-${i}`),
    range(10).map(i => `ml-${i}`),
    'bg-primary',
    'bg-secondary',
    'bg-tertiary'
  ],
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      'index.html',
      'src/**/*.{vue,html,jsx,tsx,svelte}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
  theme: {
    colors: {
      primary: '#ffd43b',
      secondary: '#183153',
      tertiary: '',
      border: '#e1e8ed',
    }
  },
});

import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'media',
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
})

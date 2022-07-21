import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { windi } from 'svelte-windicss-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  publicDir: "../dist",
  plugins: [svelte({
    preprocess: [
      windi({}),
    ]
  })],
  server: {
    port: 5000
  },
  build: {
    outDir: '../dist',
  }
})

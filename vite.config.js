import { defineConfig } from 'vite';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [cloudflare()],
  appType: 'spa',
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
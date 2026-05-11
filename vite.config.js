import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  appType: 'spa',
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});

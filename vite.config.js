import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        explore: resolve(__dirname, 'explore.html'),
        game: resolve(__dirname, 'game.html'),
        deals: resolve(__dirname, 'deals.html'),
        library: resolve(__dirname, 'library.html'),
      },
    },
  },
  server: {
    allowedHosts: ['gamehub-pddv.onrender.com'],
  },
});

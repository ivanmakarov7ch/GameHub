import { defineConfig } from 'vite';
import { resolve } from 'node:path';

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
});

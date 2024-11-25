import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['axios'],
  },
  build: {
    rollupOptions: {
      external: ['axios'],
    },
  },
});

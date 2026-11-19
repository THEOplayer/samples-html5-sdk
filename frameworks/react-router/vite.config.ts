import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  // The player is one large module by design, so raise the limit above its chunk size.
  build: { chunkSizeWarningLimit: 4000 },
  plugins: [reactRouter()]
});

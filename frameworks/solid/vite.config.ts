import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  // The player is one large module by design, so raise the limit above its chunk size.
  build: { chunkSizeWarningLimit: 4000 },
  plugins: [solid()]
});

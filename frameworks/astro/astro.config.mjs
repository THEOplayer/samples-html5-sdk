import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    // The player is one large module by design, so raise the limit above its chunk size.
    build: { chunkSizeWarningLimit: 4000 }
  }
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    // The player is one large module by design, so raise the limit above its chunk size.
    chunkSizeWarningLimit: 4000
  },
  plugins: [
    vue(),
    // OptiView Player loads its workers from libraryLocation, so the player files are served next to the app.
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/theoplayer/*.(css|js|html|wasm)',
          dest: 'vendor/theoplayer/',
          rename: { stripBase: true }
        }
      ]
    })
  ]
});

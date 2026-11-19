import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        react(),
        // OptiView Player loads its workers from libraryLocation, so the player files are served next to the app.
        viteStaticCopy({
            targets: [
                {
                    src: 'node_modules/theoplayer/*.(css|js|html|wasm)',
                    dest: 'vendor/theoplayer/',
                    rename: { stripBase: true },
                },
            ],
        }),
    ],
});

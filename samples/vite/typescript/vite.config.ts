import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'node_modules/theoplayer/*.(css|js|html|wasm)',
                    dest: 'vendor/theoplayer/'
                }
            ]
        })
    ]
})

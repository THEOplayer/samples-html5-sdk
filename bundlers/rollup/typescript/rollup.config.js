import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';

// The player loads its workers and other files from libraryLocation, so copy them next to the bundle.
function copyPlayerFiles() {
    return {
        name: 'copy-player-files',
        writeBundle() {
            mkdirSync('dist/vendor/theoplayer', { recursive: true });
            for (const file of readdirSync('node_modules/theoplayer')) {
                if (/\.(js|css|html|wasm)$/.test(file)) {
                    copyFileSync(`node_modules/theoplayer/${file}`, `dist/vendor/theoplayer/${file}`);
                }
            }
            copyFileSync('src/index.html', 'dist/index.html');
        }
    };
}

export default {
    // The player's ES modules use top-level `this`, which is `globalThis` in a browser script.
    context: 'globalThis',
    input: {
        'bundle': './src/index.ts'
    },
    output: {
        dir: './dist',
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        typescript(),
        copyPlayerFiles()
    ]
};

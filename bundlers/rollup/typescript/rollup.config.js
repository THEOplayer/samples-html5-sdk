import copy from 'rollup-plugin-copy'
import typescript from '@rollup/plugin-typescript';

export default {
    input: {
        'bundle': './src/index.ts'
    },
    output: {
        dir: './dist',
        format: 'iife',
        globals: {
            theoplayer: 'THEOplayer'
        }
    },
    external: [ 'theoplayer' ],
    plugins: [
        copy({
            targets: [
                { src: './node_modules/theoplayer/*.(js|css|html|wasm)' , dest: './dist/vendor/theoplayer' },
                { src: './src/index.html' , dest: './dist' }
            ]
        }),
        typescript()
    ]
};

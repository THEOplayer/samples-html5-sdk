import copy from 'rollup-plugin-copy'
import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/index.ts',
    output: {
        file: './dist/bundle.js',
        format: 'iife',
        globals: {
            theoplayer: 'THEOplayer'
        }
    },
    external: [ 'theoplayer' ],
    plugins: [
        copy({
            targets: [
                { src: './node_modules/theoplayer/*.(js|css|html)' , dest: './dist/vendor/theoplayer' },
                { src: './src/index.html' , dest: './dist' }
            ]
        }),
        typescript()
    ]
};

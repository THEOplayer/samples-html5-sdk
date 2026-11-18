import copy from 'rollup-plugin-copy';

export default {
    input: {
        'bundle': './src/index.js'
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
        })
    ]
};

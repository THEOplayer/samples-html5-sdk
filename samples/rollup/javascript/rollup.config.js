import copy from 'rollup-plugin-copy';

export default {
    input: './src/index.js',
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
        })
    ]
};

import copy from 'rollup-plugin-copy'

export default {
    input: './index.ts',
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
                { src: ['node_modules/theoplayer/*', '/*.js'] , dest: './dist/vendor/theoplayer' }
            ]
        })
    ]
};

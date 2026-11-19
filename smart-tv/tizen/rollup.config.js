import typescript from '@rollup/plugin-typescript';

export default {
    input: 'example-with-ui/src/TVBundler.ts',
    output: {
        file: 'example-with-ui/js/Main.js',
        format: 'iife',
        name: 'ReferenceApp'
    },
    plugins: [typescript()]
};

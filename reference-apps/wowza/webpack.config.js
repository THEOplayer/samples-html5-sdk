const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: 'theoplayer-wowza.js',
        path: __dirname + '/public/js/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    performance: {
        // The copied player files are large by design; only check the sample's own bundle.
        assetFilter: (file) => !file.includes('vendor/theoplayer/'),
    },
    plugins: [
        // THEOplayer loads its workers from libraryLocation, so the player files are served next to the app.
        new CopyPlugin({
            patterns: [{
                context: 'node_modules/theoplayer/',
                from: './*.(css|js|html|wasm)',
                to: '../vendor/theoplayer/',
                info: { minimized: true }
            }]
        })
    ]
};

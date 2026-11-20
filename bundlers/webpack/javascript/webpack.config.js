const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: [".js"]
    },
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
    performance: {
        // The bundle includes the player, which is large by design, so raise the limits above its size.
        // Source maps and the copied player files are not checked.
        assetFilter: (file) => !file.endsWith('.map') && !file.includes('vendor/theoplayer/'),
        maxAssetSize: 4_000_000,
        maxEntrypointSize: 4_000_000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CopyPlugin({
            patterns: [{
                context: "node_modules/theoplayer/",
                from: "./*.(css|js|html|wasm)",
                info: { minimized: true },
                to: "vendor/theoplayer/"
            }]
        })
    ]
};

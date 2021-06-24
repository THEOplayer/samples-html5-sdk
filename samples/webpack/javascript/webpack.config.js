const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devServer: {
        contentBase: './dist',
    },
    externals: {
        'theoplayer': 'THEOplayer'
    },
    resolve: {
        extensions: [".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CopyPlugin({
            patterns: [{
                context: "node_modules/theoplayer/",
                from: "./*.(css|js)",
                to: "vendor/theoplayer/"
            }]
        })
    ]
};

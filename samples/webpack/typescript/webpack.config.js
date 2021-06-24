const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        extension: "./src/index.ts",
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devServer: {
        contentBase: './dist',
    },
    externals: {
        'theoplayer': 'THEOplayer'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
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

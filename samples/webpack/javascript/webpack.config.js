const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    externals: {
        'theoplayer': 'THEOplayer'
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                context: "node_modules/theoplayer/",
                from: "*.(js|css)",
                to: "vendor/theoplayer/"
            }],
        })
    ]
};

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        extension: "./src/index.ts",
    },
    output: {
        filename: "app.js",
        path: __dirname + "/dist"
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
    externals: {
        "theoplayer": "THEOplayer"
    },
};

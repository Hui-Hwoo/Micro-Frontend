const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
    },
    resolve: {
        extensions: [".js", ".vue"],
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.scss$/ | /\.css$/,
                use: [
                    "vue-style-loader",
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"], // Presets are a set of plugins that are bundled together
                        plugins: ["@babel/plugin-transform-runtime"], // Plugins are small pieces of code that can be added to Babel to change how it transpiles your code
                    },
                },
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
};

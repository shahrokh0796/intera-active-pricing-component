const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
    entry: {
        index: "./src/index.js",
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: true,
            scriptLoading: "defer",
            cache: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
};
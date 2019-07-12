const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");
const webpack_rules = [];
const webpackOption = {
    module: {
        rules:
        [
            {
                test:/\.scss$/,
                use:
                    ["style-loader", "css-loader","sass-loader"]
            },
            {
                test: /\.html$/,
                use:[   
                        {loader: "html-loader"}
                    ]
            },
            { 

                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader/webpack", "babel-loader"],
                // test: /\.(js|jsx)$/,
                // exclude: /node_modules/,
                // loader: require.resolve('babel-loader'),
                //         options: {
                //         // This is a feature of `babel-loader` for webpack (not Babel itself).
                //         // It enables caching results in ./node_modules/.cache/babel-loader/
                //         // directory for faster rebuilds.
                //         cacheDirectory: true,
                //         plugins: ['react-hot-loader/babel'],
                //         },
            }

        ]
    }
,
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebPackPlugin(
        {

            template: "./src/index.html",
            filename: "./index.html"
    }
    )
  ]
}
module.exports = webpackOption;
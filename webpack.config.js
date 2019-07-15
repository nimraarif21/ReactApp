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
            test:/\.css$/,
            use:
                ["style-loader", "css-loader"]
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
                loaders: ["react-hot-loader/webpack", "babel-loader"]
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
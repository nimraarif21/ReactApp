const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const webpack_rules = [];
const webpackOption = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    module: {
        rules:[
            {
              test:/\.scss$/,
              use:["style-loader", "css-loader","sass-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                    loader: "html-loader"
                    }
                ]
                },
               { test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: "babel-loader"
                    }]
                }

            ]
    }
,
  plugins: [
    new HtmlWebPackPlugin(
        {

            template: "./src/index.html",
            filename: "./index.html"
    }
    )
  ]
}
module.exports = webpackOption;
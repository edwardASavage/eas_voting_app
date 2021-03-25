const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    mode: "development",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist/"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
                resolve: {
                    extensions: [".js", ".jsx"],
                },
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // creates `style` nodes from JS strings
                  "style-loader",
                  // translates CSS into CommonJS
                  "css-loader",
                  // compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"), 
            //we put the file that we created in public folder
        }),
        new MiniCssExtractPlugin({
            filename: "styles.[contenthash].css",
        }),
    ],
    // webpack-dev-server config
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        port: 8000,
    },
};

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  output: {
    filename: "[name].bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: [__dirname, path.join(__dirname, "dist")],
    compress: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html")
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
});

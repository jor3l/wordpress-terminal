const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const I18nPlugin = require("i18n-webpack-plugin");

const package = require("./package.json");

const language = "es";
const languages = {
  es: null,
  en: require("./language-en.json")
};

module.exports = {
  entry: path.resolve(__dirname, "src/app.js"),
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new LodashModuleReplacementPlugin({
      caching: true,
      cloning: true,
      memoizing: true
    }),
    new I18nPlugin(languages[language]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.IgnorePlugin(/^\.\/locales$/, /numeral$/),
    new webpack.ProvidePlugin({
      m: "mithril"
    }),
    new webpack.ProvidePlugin({
      alertify: "alertify.js"
    }),
    new webpack.ProvidePlugin({
      className: "classnames"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "chunk.[id].css"
    })
  ],
  context: __dirname,
  output: {
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  pragma: "m"
                }
              ]
            ],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: { loader: "file" }
      }
    ]
  },
  node: {
    console: false,
    fs: "empty",
    net: "empty",
    tls: "empty"
  },
  resolve: {
    alias: {
      "lodash-es": "lodash",
      "lodash.clonedeep": "lodash/clonedeep",
      "lodash.defaults": "lodash/defaults",
      "lodash.defaultsdeep": "lodash/defaultsDeep",
      "lodash.mergewith": "lodash/mergeWith",
      "lodash.assign": "lodash/assign"
    }
  }
};

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
//const CriticalCssPlugin = require("critical-css-webpack-plugin");
//const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");

module.exports = merge(common, {
  devtool: false,
  mode: "production",
  output: {
    filename: "[name].js",
    chunkFilename: "[id].js",
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
    /*minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: false
      })
    ]*/
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
      minify: {
        removeComments: true
        //collapseWhitespace: true,
      }
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    /*new CriticalCssPlugin({
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false
            }
        }),*/
    new UnusedFilesWebpackPlugin(),
    new GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: true,
      cacheId: "t3rminal-jor3l",
      include: [/\.html$/, /\.js$/, /\.css$/, /\.jpg$/, /\.jpeg$/, /\.png$/]
    })
    //new BundleAnalyzerPlugin
  ]
});

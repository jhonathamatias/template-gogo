const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: [
    "core-js/modules/es6.promise",
    "core-js/modules/es6.array.iterator",
    path.resolve(__dirname, "src/index.js")
  ],
  output: {
    filename: "assets/js/[name].bundle.js",
    chunkFilename: "assets/js/[contenthash].chunk.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      cache: true,
      template: path.join(__dirname, "public", "index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash:8].css",
      chunkFilename: "assets/css/[name].[contenthash:8].css"
    }),
  ],
  optimization: {
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: "extracted-comments.js"
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ], 
    splitChunks: {
      chunks: "all"
    },
    runtimeChunk: true
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      assets: path.resolve(__dirname, "src/assets/"),
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      store: path.resolve(__dirname, "src/store"),
      routes: path.resolve(__dirname, "src/routes"),
      template: path.resolve(__dirname, "src/template"),
      tools: path.resolve(__dirname, "src/tools"),
      config: path.resolve(__dirname, "config.js")
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|css|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/fonts/[name]-[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/img/[name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  }
};

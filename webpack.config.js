var webpack = require("webpack");
var vue = require('vue-loader')

// webpack.config.js
module.exports = {
  entry: './src/main.js',
  output: {
    path: "./",
    publicPath: "/public/",
    filename: './public/build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: vue.withLoaders({
          js: 'babel?optional[]=runtime'
        })
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
    }),
    new webpack.NoErrorsPlugin(),
  ]
}

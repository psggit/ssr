const webpack = require('webpack');
const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin({  
      // asset: "[path].gz[query]",
      // algorithm: "gzip",
      // test: /\.js$|\.css$|\.html$/,
      // threshold: 10240,
      // minRatio: 0.8

      test: /\.js$|\.css$|\.html$/,
      filename: "[path].gz[query]",
      exclude: /node_modules/,
      algortithm: 'gzip',
      threshhold: 10240,
      minRatio: 0.8
    })
  ],
  devServer: {
    contentBase: './dist',
    //hot: true
    port: 8001,
    compress: true
  }
};

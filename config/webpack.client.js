const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtract = require("mini-css-extract-plugin")
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', 'src/client/client.js'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/dist/',
        filename: 'client.js'
    },
    plugins: [
        new CleanWebpackPlugin(['./../dist']),
        new HtmlWebpackPlugin({
          title: 'Output Management',
          template: 'src/client/index.html'
        }),
         
        new MiniCssExtract({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
        
    ],
    resolve: {
        extensions: ['.js'],
        alias: {
            components: path.resolve(__dirname, '..', 'src/components'),
        }
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, './../dist'),
    //     port: 8001,
    //     compress: true
    // },
    module: {
        rules: [
            {
                //test: /\.jsx?$/,
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            // {
            //     test: /\.scss$|\.css$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            { 
              test: /\.css$/,
              use: [
                  MiniCssExtract.loader, // creates style nodes from JS strings
                  "css-loader?url=false", // translates CSS into CommonJS
                  "sass-loader" // compiles Sass to CSS, using Node Sass by default
              ],
              //include: path.resolve(__dirname, '..', 'dist')
            }
            // {
            //     test: /\.(ttf|eot|otf|svg|png)$/,
            //     loader: 'file-loader'
            // },
            // {
            //     test: /\.(woff|woff2)$/,
            //     loader: 'url-loader'
            // }
        ]
    }
};
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PerspectivePlugin = require("@jpmorganchase/perspective/webpack-plugin");
const path = require("path");

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(less)$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]},

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
               test: /\.(png|svg|jpg|gif)$/,
                 use: [
                   'file-loader'
                ]
      },
      {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                   'file-loader'
                 ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
      
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
     
    }),
    new PerspectivePlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};

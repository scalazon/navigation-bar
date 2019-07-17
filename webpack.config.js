const webpack = require('webpack');
const path = require('path');
// const combineLoaders = require('webpack-combine-loaders');


module.exports = {
  mode: 'development',
  entry: {
    index: './client/index.js' //entry point
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'navbar_bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }, 
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }
};

const webpack = require('webpack');
const path = require('path');

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
        test: /\.css$/,
         use: ['style-loader', 'css-loader']
      } 
    ]
  }
};

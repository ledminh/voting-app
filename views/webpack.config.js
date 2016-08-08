var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './jsx/main.jsx',
  output: {
    path: __dirname + '/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      app: './src/index.js',
      vendor: ['react', 'react-dom']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Output Management',
//       favicon: './favicon.ico'
//     })
//   ],

  module: {
      rules: [
          {
              test: /\.css/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
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
            }
      ]
  },

  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
   devtool: "eval-source-map"
};
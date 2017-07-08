const path = require('path');

module.exports = {

  // This is the entry point or start of our react applicaton
  entry: path.join(__dirname, '/client/src/index.js'),

  // The plain compiled JavaScript will be output into this file
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  // This section desribes the transformations we will perform
  module: {
    rules: [
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                include: [
                      path.join(__dirname, '/client/src/assets/')
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader?limit=1024&name=../assets/images/[name].[ext]'
                    ],
                include: [
                    path.join(__dirname, '/client/src/assets/')
                    ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader?limit=1024&name=../assets/fonts/[name].[ext]'
                  ],
                include: [
                  path.join(__dirname, '/client/src/assets/')
                ]
          },
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            query: {
              presets: [
                'es2015',
                'react'
              ],
              plugins: []
            },
            include: [
              path.join(__dirname, '/client/src'),
            ]
          }
      ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map",
  watch: true
};

module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./app/index.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    filename: "public/bundle.js"
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
                      /assets/
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader?limit=1024&name=public/assets/images/[name].[ext]'
                    ],
                include: [
                    /assets/
                    ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader?limit=1024&name=public/assets/fonts/[name].[ext]'
                  ],
                include: [
                  /assets/
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
              //path.resolve(__dirname, 'app')
              /app/
            ]
          }

        //   {
        //         // Only working with files that in in a .js or .jsx extension
        //         test: /\.(js|jsx)?$/,
        //         // Webpack will only process files in our app folder. This avoids processing
        //         // node modules and server files unnecessarily
        //         include: /app/,
        //         use: [ "babel-loader" ],
        //         // query: {
        //         //   // These are the specific transformations we'll be using.
        //         //   presets: ["react", "es2015"]
        //         // }
        // }
      ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};

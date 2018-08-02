const path = require('path');

module.exports = {
    entry:'./js/app.js',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './'
    },
    module: {
        rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                  presets: ['env']
                }
              }
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader'
              ]
          }
        ]
      }
  }
var path = require('path');

module.exports = {
  entry: './app/src/js/App.js',
  output: {
    path: path.resolve(__dirname, './app/dist/js'),
    filename: 'App.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
};

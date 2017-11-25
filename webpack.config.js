const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public/',
    port: 8080,
    inline: true,
    historyApiFallback: true,
    clientLogLevel: "info",
    stats: { colors: true }
  }
};

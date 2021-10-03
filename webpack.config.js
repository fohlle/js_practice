
const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js',
    test: "./src/test.js",
    dropdown:"./src/dropdown.js",
    slider: "./src/slider.js"
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
};
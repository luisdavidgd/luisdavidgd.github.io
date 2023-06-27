const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const OUT_DIR = path.resolve(__dirname, 'public');

const components = ['about', 'blog', 'contact', 'home', 'nav', 'portfolio'];

const htmlPlugins = components.map((component) => {
  return new HtmlWebpackPlugin({
    template: `./components/${component}.html`,
    filename: `components/${component}.html`,
    inject: 'body',
    chunks: [],
  });
});

htmlPlugins.push(
  new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body',
  })
);

module.exports = {
  context: SRC_DIR,
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    path: OUT_DIR,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: htmlPlugins,
};

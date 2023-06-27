const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: 'src/components/about.html',
      filename: 'components/about.html',
      inject: 'body',
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      template: 'src/components/blog.html',
      filename: 'components/blog.html',
      inject: 'body',
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      template: 'src/components/contact.html',
      filename: 'components/contact.html',
      inject: 'body',
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      template: 'src/components/home.html',
      filename: 'components/home.html',
      inject: 'body',
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      template: 'src/components/nav.html',
      filename: 'components/nav.html',
      inject: 'body',
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      template: 'src/components/portfolio.html',
      filename: 'components/portfolio.html',
      inject: 'body',
      chunks: [],
    }),
  ],
};

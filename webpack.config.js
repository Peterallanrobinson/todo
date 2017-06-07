const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'app'),
          path.resolve(__dirname, 'test', 'spec'),
          fs.realpathSync(path.resolve(__dirname, 'node_modules', 'react-router', 'es'))
        ],
        query: {
          presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0'].map(require.resolve),
          plugins: process.env.NODE_ENV === 'test' ? ['istanbul'] : []
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!less-loader'
        })
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]?[hash]'
      },
      {
        test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&name=images/[name].[ext]?[hash]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {}
    }),
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.NormalModuleReplacementPlugin(/^\.\/package$/, (result) => {
      if (/cheerio/.test(result.context)) {
        result.request = './package.json';
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Todo',
      filename: '../index.html',
      hash: true,
      template: 'index.ejs'
    }),
    new FaviconsWebpackPlugin({
      logo: './public/images/favicon-master.png',
      prefix: 'icons-[hash]/',
      emitStats: false,
      persistentCache: true,
      inject: true,
      background: '#fff',
      title: 'Todo',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: true
      }
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    filename: 'bundle.js',
    publicPath: '/assets/'
  }
};

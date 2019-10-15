/*
* @Author: RickHuang
* @Date:   2019-10-15 12:07:05
* @Last Modified by:   RickHuang
* @Last Modified time: 2019-10-16 09:38:26
*/

const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// environment config dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);

// get html-webpack-plugin args
const getHtmlConfig = function(name) {
  return {
    template: `./src/view/${name}.html`,
    filename: `view/${name}.html`,
    inject  : true,
    hash    : true,
    chunks  : ['common', `${name}`]
  }
}

const config = {

  entry: {
    'common': ['./src/page/common/index.js'],
    'index' : ['./src/page/index/index.js'],
    'login' : ['./src/page/login/index.js']
  },

  devServer: {
    port  : 8088,
    inline: true,
    proxy : {
      '**/*.do' : {
          target: 'http://test.happymmall.com',
          changeOrigin : true
      }
    }
  },

  output: {
    path      : path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename  : 'js/[name].js'
  },
  // deal with jquery import
  externals: {
    'jquery': 'window.jQuery'
  },

  module: {
    loaders: [
      { // deal with css style file
        test  : /\.css$/, 
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader') 
      },
      {
        test  : /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=100&name=resource/[name].[ext]'
      }
    ]
  },

// 配置路径别名
  resolve: {
    alias: {
      util    : __dirname + '/src/util',
      page    : __dirname + '/src/page',
      service : __dirname + '/src/service',
      image   : __dirname + '/src/image'
    }
  },

  plugins: [
  // deal with some common modules/ 独立通用模块到js/base.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // load the common folder files to base.js
      filename: 'js/base.js'
    }),
    // 把css单独打包到文件里
    new ExtractTextPlugin('css/[name].css'),
    // 处理HTML模板
    new HtmlWebpackPlugin(getHtmlConfig('index')),
    new HtmlWebpackPlugin(getHtmlConfig('login')),
  ]

};

if (WEBPACK_ENV === 'dev') {
  config.entry.common.push('webpack-dev-server/client?http://localhost:8088/')
}

module.exports = config;

/*
  webpack 对脚本的处理


*/
















'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js'  //  配置入口文件
  },
  output: {
    path: path.join(__dirname, 'dist'),  // __dirname 在 Node.js 中就是指这个代码文件所在文件夹
    filename: 'index.js'
  },
  // mode: 'production',  // 开发环境
  // html-webpack-plugin这个插件可以自动生成基本的 html 页面
  plugins: [
      new HtmlWebpackPlugin({
      // title: 'leaningwebpack',  //  设置生成的html文件标题
      // filename: 'webpack-index.html',  //html文件名
      // favicon: 'webpack.ico'  //  设置一个网页图标
    }),
    new webpack.HotModuleReplacementPlugin()   //启动热更新
  ],
  module: {
    rules: [
      {
        test: /.js$/,  //  test是一个正则，用来匹配文件后缀名
        use: 'babel-loader',  //  use表示此loader名称
        exclude: /node_modules/  // 构建时候忽略babel-loader
      },
      // {
      //   test: /.css$/,
      //   //  书写loader有顺序先后，style-loader在前，这样执行的时候先加载ccss-loader，将css解析好后再将css传递style-loader
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // },
      // {
      //   test: /.less$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'less-loader'
      //   ]
      // },
      // {
      //   test: /.(jpg|png|gif|jpeg)$/,
      //   use: 'file-loader'
      // },
      // 只有file-loader有时候img并不会加载出来需要添加url—loader
      {
        test: /.(jpg|png|gif|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 160000,
            name: 'imgs/[name].[hash].[ext]'
          }
        }]
      }
    ]
  }
}
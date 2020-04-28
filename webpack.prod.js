'use strict'
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');  // 分离js与css，css文件分离构建
const {CleanWebpackPlugin} = require('clean-webpack-plugin');  // 清理输出文件

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin({filename: "style.css"})],
    module: {rules: [
        {
            test: /.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
              })
        }]
    }
 });

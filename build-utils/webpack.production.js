/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 22:25:24
 * @LastEditTime: 2019-08-25 15:52:17
 * @LastEditors: Please set LastEditors
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = () => ({
  devtool: 'source-map',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
})
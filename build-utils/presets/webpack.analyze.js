/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-25 15:33:44
 * @LastEditTime: 2019-08-25 15:40:05
 * @LastEditors: Please set LastEditors
 */
const webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = () => ({
  plugins: [new webpackBundleAnalyzer()]
})
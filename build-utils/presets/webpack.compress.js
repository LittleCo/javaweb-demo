/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-25 15:32:53
 * @LastEditTime: 2019-08-25 15:43:53
 * @LastEditors: Please set LastEditors
 */
const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = () => ({
  plugins: [
    new CompressionWebpackPlugin()
  ]
});

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 16:48:10
 * @LastEditTime: 2019-08-25 16:19:23
 * @LastEditors: Please set LastEditors
 */

const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = (env) => require(`./build-utils/webpack.${env}.js`)(env) 
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const loadPresets = require("./build-utils/loadPresets");

module.exports = ({ mode = 'production', presets = [] }) => {
  console.log(mode, presets)
  return webpackMerge(
    {
      mode,
      entry: path.resolve(__dirname, './src/main.js'),
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, '../mtms-node/dist')
      },
      devServer: {
        // config for vue history mode router
        historyApiFallback: true,
      },  
      module: {
        rules: [
          // {
          //   test:  /\.(ttf|eot|woff|woff2)$/,
          //   use: [
          //     {
          //       loader: "file-loader",
          //       options: {
          //         name: "[name].[ext]"
          //       }
          //     }
          //   ]
          // },
          {
            test: /\.(pne?g|jpg|gif|svg|ttf|eot|woff|woff2)$/,
            use: ['url-loader']
          },  
          {
            test: /\.vue$/,
            use: ['vue-loader']
          },
          {
            test: /\.s?css$/,
            use: ['style-loader','css-loader','sass-loader']
          },
          // {
          //   test: /\.js$/,
          //   use: {
          //     loader: 'babel-loader',
          //     options: {
          //       presets: ["@babel/preset-env"]
          //     },
          //   },
          //   exclude: '/node_modules/'
          // }
        ]
      }, 
      plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          filename: './index.html',
          template: './src/index.html'
        }), 
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  );
};

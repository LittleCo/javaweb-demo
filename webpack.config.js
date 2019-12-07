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
        path: path.resolve(__dirname, './dist')
      },
      devServer: {
        // config for vue history mode router
        historyApiFallback: true,
      },  
      module: {
        rules: [
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
        ]
      }, 
      plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html'
        }), 
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  );
};

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 22:31:57
 * @LastEditTime: 2019-08-25 16:19:42
 * @LastEditors: Please set LastEditors
 */
const webpackMerge = require('webpack-merge')

const applyPresets = (env) => {
  const { presets } = env
  /** @type {string[]} */
  const mergePresets = [].concat(...[presets])
  const mergeConfigs = mergePresets.map(
    presetName => require(`./presets/webpack.${presetName}`)(env)
  )

  return webpackMerge({}, ...mergeConfigs)
}

module.exports = applyPresets
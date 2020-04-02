const webpack = require('webpack')
require('dotenv').config()

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})

    config.plugins.push(new webpack.DefinePlugin(env))
    console.log(config)
    return config
  }
}

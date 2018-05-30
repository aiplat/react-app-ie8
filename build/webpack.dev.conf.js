/*
    修 改 人：aiplat.com
    最近修改：2018.05.17
    修改描述：新增less、devServer设置
*/
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const cm = require('../config')

const devConfig = {
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [{
            test: /\.css|less$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        }]
    },
    devServer: merge({
        contentBase: cm.dev.mock,
        historyApiFallback: true,
        host: cm.dev.host,
        port: cm.dev.port,
        disableHostCheck: true,
        watchOptions: {
            aggregateTimeout: 100,
            poll: 1000
        },
        open: cm.dev.openWin
    }, cm.dev.devServer)
}

module.exports = merge(baseConfig, devConfig)
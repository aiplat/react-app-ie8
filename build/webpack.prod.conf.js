/*
    修 改 人：aiplat.com
    最近修改：2018.05.17
    修改描述：新增less、gzip压缩、shelljs
*/
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const cm = require('../config')
const baseConfig = require('./webpack.base.conf.js')

const shelljs=require('shelljs')
shelljs.rm('-rf', cm.build.dist)

const api = path.join(cm.build.dist, 'api')
shelljs.mkdir('-p', api)
shelljs.cp('-R', 'mock/api/*', api)

const prodConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            mangle: {
                screw_ie8: false
            },
            mangleProperties: {
                screw_ie8: false
            },
            compress: {
                screw_ie8: false
            },
            output: {
                screw_ie8: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(cm.build.env)
            }
        }),
        new ExtractTextPlugin('static/css/[name].[contenthash:10].css')
    ]
}

var Config = merge(baseConfig, prodConfig)
if (cm.build.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')
    Config.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                cm.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

module.exports = Config
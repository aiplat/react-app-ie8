/*
    修 改 人：aiplat.com
    最近修改：2018.05.17
    修改描述：url
*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const es3ifyPlugin = require('es3ify-webpack-plugin')
const dir = '../'
const projectRoot = path.resolve(__dirname, dir)

const baseConfig = {
    entry: {
        main: [
            'es5-shim',
            'es5-shim/es5-sham',
            'babel-polyfill',
            path.join(__dirname, dir + 'src/main.js')
        ]
    },
    output: {
        path: path.join(__dirname, dir + 'dist'),
        filename: 'static/js/[name].[chunkhash].js',
        chunkFilename: 'static/js/[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['export-from-ie8/loader']
            }
        ],
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url?limit=8192&name=static/img/[hash:10].[name].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, dir + 'index.html'),
            favicon:path.join(__dirname, dir + 'src/assets/favicon.ico')
        }),
        new es3ifyPlugin()
    ],
    resolve: {
        alias: {
            components: path.join(__dirname, dir + 'src/components'),
            routes: path.join(__dirname, dir + 'src/routes'),
            views: path.join(__dirname, dir + 'src/views'),
            assets: path.join(__dirname, dir + 'src/assets'),
            plugins: path.join(__dirname, dir + 'src/plugins'),
            actions: path.join(__dirname, dir + 'src/redux/actions'),
            reducers: path.join(__dirname, dir + 'src/redux/reducers')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, dir + 'node_modules')]
    }
}

module.exports = baseConfig
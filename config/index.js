/*
    修 改 人：aiplat.com
    新建：2018.05.14
    最近修改：
    修改描述：
*/
const path = require('path')
const cm = require('../src/plugins/cmnode')

var proxy = {
    // 请求到 '/api' 下 的请求都会被代理到 target： http://aiplat.com 中
    '/api/*': {
        target: 'http://aiplat.com',
        secure: false,
        changeOrigin: true
    }
}

proxy = {}


module.exports = {
    build: {
        env: 'production',
        dist: path.join(__dirname, '../dist'),
        productionGzip: true,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: 'development',
        mock: path.join(__dirname, '../mock'),
        host: cm.getIP(),
        port: 3008,
        openWin: false,
        devServer: {
            proxy: proxy
        }
    }
}

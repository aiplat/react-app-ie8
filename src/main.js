import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import createHistory from 'history/createHashHistory'
import { HashRouter as Router,hashHistory as History} from 'react-router-dom'

//import createHistory from 'history/createBrowserHistory'
//import {BrowserRouter as Router,browserHistory as History} from 'react-router-dom'

require('assets/css/lib/cmreset.css')
require('assets/css/lib/cmstyle.css')
require('assets/css/lib/aiplat.css')

//全局site配置
window.site = { name: 'react-app-ie8',webapp:true, logo: require('assets/images/icon.png'), description: 'react+redux+react-router+cmui+html5+css3+less+es6+webpack+兼容IE8,适合开发各种webapp、企业网站、后台管理系统等等任何系统', site: 'aiplat.com', url: 'http://aiplat.com' }
window.cm = require('plugins/cmapp')
window.rHistory = createHistory()

import Store from './redux/store'
import Routes from './routes/index'

import FastClick from 'fastclick'
FastClick.attach(document.body)

ReactDom.render(
    <Provider store={Store}>
        <Router history={History}>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('app')
)
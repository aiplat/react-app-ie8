//全局jquery  (未使用) "jquery": "^1.11.1"
//window.jQuery = window.$ = require('jquery/dist/jquery.min.js');

import Axios from 'axios'
//axios全局配置
//Axios.defaults.baseURL = 'http://react.aiplat.com';
//Axios.defaults.headers.common['AUTH_TOKEN'] = 'AUTH_TOKEN';
//Axios.defaults.headers.common['UID'] = 'UID';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//全局配置
window.site = { name: 'react-app-ie8',webapp:true, logo: require('assets/images/icon.png'), description: 'react+redux+react-router+cmui+html5+css3+less+es6+webpack+兼容IE8,适合开发各种webapp、企业网站、后台管理系统等等任何系统', site: 'aiplat.com', url: 'http://aiplat.com' }

//全局cmapp
window.cm = require('./cmapp');

//全局cookie
//window.coki = require('./cookie');

import FastClick from 'fastclick'
FastClick.attach(document.body)

export default window;
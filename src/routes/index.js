import React, { Component } from 'react';
import CombineRoutes from './combineRoutes';

//全局site配置
window.site = { name: 'react-app-ie8', logo: require('assets/images/icon.png'), description: 'react+redux+react-router+cmui+html5+css3+less+es6+webpack+兼容IE8,适合开发各种webapp、企业网站、后台管理系统等等任何系统', site: 'aiplat.com', url: 'http://aiplat.com' };
window.cm = require('plugins/cmapp');

//当前项目所有路由
import Aiplat from './aiplat';

export default class App extends Component {
    render() {
        return (
            <CombineRoutes routes={Aiplat}>
            </CombineRoutes>
        )
    }
}
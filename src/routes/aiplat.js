import NotFound from 'bundle-loader?lazy&name=notFound!views/common/notFound'
import Index from 'bundle-loader?lazy&name=index!views/index/index'
import Apps from 'bundle-loader?lazy&name=apps!views/apps/index'
import Donate from 'bundle-loader?lazy&name=donate!views/donate/index'

import Login from 'bundle-loader?lazy&name=login!views/user/login'

import Test from 'bundle-loader?lazy&name=test!views/test/index'
import Test2 from 'bundle-loader?lazy&name=test2!views/test/test2'

var Routes = {}
//主路由
Routes.router = [
    { path: '/', exact: true, auth: false, component: Index},
    { path: '/404', auth: false, component: NotFound},
    { path: '/apps.html', auth: false, component: Apps },
    { path: '/donate.html', auth: false, component: Donate },
    { path: '/login.html', auth: false, component: Login},
    { path: '/test', exact: true, auth: true, component: Test},
    { path: '/test/:id', auth: true, component: Test2}
]
//重定向路由
Routes.redirect = [
    { path: '/index', redirect: true, to: '/' },
    { path: '/index.htm', redirect: true, to: '/' },
    { path: '/index.html', redirect: true, to: '/' },
    /* * 404必须最后*/
    { path: '*', redirect: true, to: '/404' }
]

export default Routes
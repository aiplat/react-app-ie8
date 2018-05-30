import Bundle from './bundle';

import NotFound from 'bundle-loader?lazy&name=notFound!views/common/notFound';
import Index from 'bundle-loader?lazy&name=index!views/index/index';
import Apps from 'bundle-loader?lazy&name=apps!views/apps/index';
import Donate from 'bundle-loader?lazy&name=donate!views/donate/index';
import Test from 'bundle-loader?lazy&name=test!views/test/index';
import Test2 from 'bundle-loader?lazy&name=test!views/test/test2';

var Routes = {}
//主路由
Routes.router = [
    {path:'/',exact:true,component:Bundle(Index)},
    {path:'/404',component:Bundle(NotFound)},
    {path:'/apps.html',component:Bundle(Apps)},
    {path:'/donate.html',component:Bundle(Donate)},
    {path:'/test',exact:true,component:Bundle(Test)},
    {path:'/test/:id',component:Bundle(Test2)}
]
//重定向路由
Routes.redirect = [
    {path:'/index',redirect:true,to:'/'},
    {path:'/index.htm',redirect:true,to:'/'},
    {path:'/index.html',redirect:true,to:'/'},
    {path:'/test2',redirect:true,to:'/test'},
    /* * 404必须最后*/
    {path:'*',redirect:true,to:'/404'}
]

export default Routes
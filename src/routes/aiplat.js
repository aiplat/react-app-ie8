import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Bundle from './bundle';
import Loading from 'components/loading';
const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading />
        }
    </Bundle>
);

//全局site配置
window.Mconf = { name: 'react-app-ie8', logo: require('assets/images/icon.png'), description: 'react+redux+react-router+cmui+html5+css3+less+es6+webpack+兼容IE8,适合开发各种webapp、企业网站、后台管理系统等等任何系统', site: 'aiplat.com', url: 'http://aiplat.com' };
window.cm = require('plugins/cmapp');

import Index from 'bundle-loader?lazy&name=index!views/index/index';
import Apps from 'bundle-loader?lazy&name=apps!views/apps/index';
import Donate from 'bundle-loader?lazy&name=donate!views/donate/index';
import Test from 'bundle-loader?lazy&name=test!views/test/index';
import NotFound from 'bundle-loader?lazy&name=notFound!views/common/notFound';
export default () => (
    <Switch>
        <Route component={createComponent(Index)}
            exact
            path="/"
        />
        <Route path="/index"
            render={() => <Redirect to="/" />}
        />
        <Route path="/index.htm"
            render={() => <Redirect to="/" />}
        />
        <Redirect from="/index.html"
            to="/"
        />
        <Route component={createComponent(Apps)}
            path="/apps.html"
        />
        <Route component={createComponent(Donate)}
            path="/donate.html"
        />
        <Route component={createComponent(Test)}
            path="/test"
        />
        <Route component={createComponent(NotFound)}/>
    </Switch>
);
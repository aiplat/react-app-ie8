import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import { HashRouter as Router,hashHistory as History} from 'react-router-dom';
//import {BrowserRouter as Router,browserHistory as History} from 'react-router-dom';

require('assets/css/lib/cmreset.css');
require('assets/css/lib/cmstyle.css');
require('assets/css/lib/aiplat.css');

import Routes from './routes/index';
import Store from './redux/store';

import FastClick from 'fastclick'
FastClick.attach(document.body);

ReactDom.render(
    <Provider store={Store}>
        <Router history={History}>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('app')
);
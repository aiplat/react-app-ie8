import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import { HashRouter as Router } from 'react-router-dom';
//import {BrowserRouter as Router,browserHistory} from 'react-router-dom';
//history={browserHistory}

require('assets/css/lib/cmreset.css');
require('assets/css/lib/cmstyle.css');
require('assets/css/lib/aiplat.css');

import Routes from './routes/index';

import FastClick from 'fastclick'
FastClick.attach(document.body);

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('app')
);
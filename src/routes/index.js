import React, { Component } from 'react';
import routes from './aiplat';

export default class App extends Component {
    render() {
        return (
            <div>
                {routes()}
            </div>
        )
    }
}
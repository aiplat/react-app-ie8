import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Switch>
                {
                    this.props.routes.router.map((item,key)=>{
                        return (
                            <Route component={item.component}
                                exact={item.exact}
                                key={key}
                                path={item.path}
                            />
                        )
                    })
                }
                {
                    this.props.routes.redirect.map((item,key)=>{
                        return (
                            <Route key={key}
                                path={item.path}
                                render={() => <Redirect to={item.to} />}
                            />
                        )
                    })
                }
            </Switch>
        )
    }
}
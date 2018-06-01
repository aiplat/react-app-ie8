/**
 * by womendi
 * 新建时间：2018.05.30
 */
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Bundle from './bundle'
import { AuthRoute } from './authRoute'

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const routes = this.props.routes
        return (
            <Switch>
                {
                    routes.router.map((item, key) => {
                        return (
                            <AuthRoute auth={item.auth}
                                component={Bundle(item.component)}
                                exact={item.exact}
                                key={key}
                                path={item.path}
                            />
                        )
                    })
                }
                {
                    routes.redirect.map((item, key) => {
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
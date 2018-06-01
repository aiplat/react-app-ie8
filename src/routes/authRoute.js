/**
 * by womendi
 * 新建时间：2018.06.01
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const AuthRoute = ({ component: BundleComponent, auth: Auth, ...rest }) => {

    class IsAuth extends Component {
        constructor(props) {
            super(props)
        }
        tsRender(props) {
            //在aiplat.js中Routes.router设置path路径对应的auth为true或false
            //auth=true且uid=0时需要跳转到登录页/login.html
            if (Auth && this.props.uid == 0) {
                return <Redirect to={{
                    pathname: '/login.html',
                    state: {
                        from: props.location,
                        txt: 'You have to be logining.'
                    }
                }}
                       />
            } else {
                return <BundleComponent {...props} />
            }
        }

        render() {
            return (
                <Route {...rest} render={this.tsRender.bind(this)} />
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
            uid: state.login.uid
        }
    }

    const IsAuthComponent = connect(mapStateToProps)(IsAuth)
    return <IsAuthComponent />
}
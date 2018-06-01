import React, { Component } from 'react'
import CombineRoutes from './combineRoutes'

//当前项目所有路由
import Aiplat from './aiplat'

export default class App extends Component {
    render() {
        return (
            <CombineRoutes routes={Aiplat} />
        )
    }
}
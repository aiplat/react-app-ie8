import React, { Component } from 'react'

import Footer from 'components/footer'


class Index extends Component {
    constructor(props) {
        super(props)
    }
    MenuList = [
        { name: '首页', url: '/', img: require('assets/images/footer/sy_01.png'), imgOn: require('assets/images/footer/sy_01on.png') },
        { name: '应用展示', url: '/apps.html', img: require('assets/images/footer/sy_03.png'), imgOn: require('assets/images/footer/sy_03on.png') },
        { name: '捐赠我们', url: '/donate.html', img: require('assets/images/footer/sy_04.png'), imgOn: require('assets/images/footer/sy_04on.png') }
    ]
    render() {
        return (
            <div>
                <Footer MenuList={this.MenuList}
                    path={this.props.path}
                />
            </div>
        )
    }
}

export default Index
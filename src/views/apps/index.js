import React, { Component } from 'react'

import Beian from 'components/beian'
import Header from 'components/header'
import Footer from 'views/common/footer'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            win: window.cm.updateAni(this.props.location.pathname, 'cm_Wl2r03'),
            icon: require('assets/images/commons/metro_icon.png'),
            indexData: [
                {
                    name: '亲信地铁',
                    arr: [
                        { name: '跨平台网址-webApp', url: 'http://m.aiplat.com/metro', market: '' },
                        {
                            name: '安卓App下载',
                            url: 'http://a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5093BCE5',
                            market: '腾讯应用宝'
                        },
                        {
                            name: '苹果App下载',
                            url: 'https://itunes.apple.com/cn/app/id1254451008',
                            market: 'appstore'
                        }
                    ]
                },
                {
                    name: '娱乐计分器',
                    arr: [
                        { name: '微信小程序-搜索‘娱乐计分器’', url: 'weixin://', market: '' }
                    ]
                },
                {
                    name: 'AI智能空间',
                    arr: [
                        {
                            name: '单页面vue版',
                            url: 'http://aiplat.com',
                            market: ''
                        },
                        {
                            name: '单页面react版',
                            url: 'http://react.aiplat.com',
                            market: ''
                        },
                        {
                            name: '单页面angular版',
                            url: 'http://ajs.aiplat.com',
                            market: ''
                        },
                        {
                            name: '多页面nervjs版',
                            url: 'http://nerv.aiplat.com',
                            market: ''
                        }
                    ]
                }
            ]
        }
    }
    toDown(url) {
        if (!url) {
            return false
        }
        if (url == 'weixin://' && window.cm.isMob() == 0) {
            window.alert('请在手机浏览器点击打开微信')
            return false
        }
        window.location = url
    }
    render() {
        const Hdata = { title: '应用展示', imgL: '', imgR: '' }
        return (
            <div className={this.state.win.ani}>
                <Header Hdata={Hdata} />
                <div className="cm_main">
                    <ul className="cm_pc_12 cm_mt3 cm_mb6">
                        <li className="cm_pc_12 cm_mt05 cm_tc">
                            <img className="cm_wh7 cm_bs100 cm_fc"
                                src={this.state.icon}
                            />
                        </li>
                        <li className="cm_pc_12">
                            {this.state.indexData.map((item2, key) => {
                                return (
                                    <ul className="cm_pc_12 cm_prl05"
                                        key={key}
                                    >
                                        <li className="cm_pc_12">
                                            <div className="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{key + 1}、{item2.name}</div>
                                        </li>
                                        <li className="cm_pc_12 cm_pd05 cm_tc cm_be">
                                            {item2.arr.map((v, key) => {
                                                return (
                                                    <div className="cm_pc_12 cm_lh3 cm_br02 cm_bf cm_bb1ce"
                                                        key={key}
                                                        onClick={() => this.toDown(v.url)}
                                                    >
                                                        <div className="cmtou">{v.market ? v.market + '-' + v.name : v.name}</div>
                                                    </div>
                                                )
                                            })}
                                        </li>
                                    </ul>
                                )
                            })}
                        </li>
                    </ul>
                </div>
                <Beian />
                <Footer path={this.props.location.pathname} />
            </div>
        )
    }
}

export default Index
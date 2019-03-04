import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getSiteInfo } from 'actions/siteinfo'

import Header from 'components/header'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            win: window.cm.updateAni(1, 'cm_Wr2l04'),
            icon: window.site.logo,
            indexData: {
                description: 'AI智能空间,拥抱人工智能,明天会更好。个人项目:跨平台app~《亲信地铁》、小程序~《娱乐计分器》。技术研究潜心使用各种框架开发h5app:同时兼容wap、web、微信浏览器、微信小程序、android和ios,六个平台界面统一,功能一致。详见应用展示。',
                gitName: '我的github',
                gitUrl: 'github.com/aiplat',
                gitUrl2: 'https://github.com/aiplat',
                gitList: [{
                    name: 'cmui',
                    desc: '自己写的跨平台css3框架',
                    url: 'https://github.com/aiplat/cmui'
                }, {
                    name: 'vueapp',
                    desc: '改写vue-cli的跨平台框架',
                    url: 'https://github.com/aiplat/vueapp'
                }, {
                    name: 'express-multipage',
                    desc: '改写express的多页面框架',
                    url: 'https://github.com/aiplat/express-multipage'
                }, {
                    name: 'react-app-ie8',
                    desc: '改写react兼容IE8的跨平台框架',
                    url: 'https://github.com/aiplat/react-app-ie8'
                }],
                cooperation: '联系我',
                email: 'womendi@qq.com'
            }
        }
    }

    componentWillMount() {
        window.cm.cl('-----------react生命周期-----------')
        window.cm.cl('componentWillMount')
    }
    componentDidMount() {
        window.cm.cl('componentDidMount..')
        var t = this
        t.props.getSiteInfo()
        setTimeout(()=>{
            if(t.props.siteinfo.res==0){
                t.setState({
                    indexData:t.props.siteinfo.info
                })
            }
        },300)
    }
    /*
    componentWillReceiveProps(newProps) {
        window.cm.cl('componentWillReceiveProps')
    }
    shouldComponentUpdate(newProps, newState) {
        window.cm.cl('shouldComponentUpdate')
        return true
    }
    componentWillUpdate(nextProps, nextState) {
        window.cm.cl('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState) {
        window.cm.cl('componentDidUpdate')
    }
    */
    componentWillUnmount() {
        window.cm.cl('componentWillUnmount..')
        window.cm.cl('-----------react生命周期-----------')
    }
    toEmail() {
        return 'mailto:' + this.state.indexData.email
    }
    render() {
        const m = this.props.match
        const Hdata = { title: m.url, imgL: require('assets/images/commons/cm_back2.png'), imgR: '' }
        return (
            <div className={this.state.win.ani}>
                <Header Hdata={Hdata}
                    toBackAni={() => window.cm.toBackAni(this,'noAni')}
                />
                <div className="cm_main">
                    <ul className="cm_pc_12 cm_mt3 cm_mb6">
                        <li className="cm_pc_12 cm_mt05">
                            <Link to="/a.html"><img  className="cm_wh7 cm_bs100 cm_br305 cm_fc"
                                src={this.state.icon}
                                               /></Link>
                        </li>
                        <li className="cm_pc_12 cm_be">
                            <div className="cm_pc_12 cm_pd05 cm_bf cm_lh105 cm_ti2 cm_mb05"
                                onClick={()=>this.props.getSiteInfo()}
                            >{this.state.indexData.description}</div>
                        </li>
                        <li className="cm_pc_12 cm_prl05">
                            <div className="cm_pc_12">
                                <Link className="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02"
                                    to="/test/123"
                                >{this.state.indexData.gitName}</Link>
                                <div className="cm_pa cm_tr0 cm_hl3 cm_mr05"><a href={this.state.indexData.gitUrl2}
                                    target="_blank"
                                                                             >{this.state.indexData.gitUrl}</a></div>
                            </div>
                            <div className="cm_pc_12 cm_pd05 cm_tc cm_be">
                                {this.state.indexData.gitList.map((v, k) => {
                                    return (
                                        <div className="cm_pc_12 cm_lh3 cm_br02 cm_bf cm_bb1ce"
                                            key={k}
                                        >
                                            <a href={v.url}
                                                target="_blank"
                                            ><div className="cmtou"><span className="cm_c1c cm_fwb">{v.name}</span>:<span className="cm_fs08">{v.desc}</span></div></a>
                                        </div>
                                    )
                                })}
                            </div>
                        </li>
                        <li className="cm_pc_12 cm_prl05 cm_tc">
                            <div className="cm_pc_12 cm_bb1ce">
                                <div className="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{this.state.indexData.cooperation}</div>
                                <div className="cm_pa cm_tr0 cm_hl3 cm_mr05">
                                    <a href={this.toEmail()}
                                        target="_blank"
                                    >{this.state.indexData.email}</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({ siteinfo: state.siteinfo }), { getSiteInfo })(Index)
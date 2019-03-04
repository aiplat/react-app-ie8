import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tsone } from 'actions/donate'

import Beian from 'components/beian'
import Header from 'components/header'
import Footer from 'views/common/footer'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dnid:0,
            win: window.cm.updateAni(this.props.location.pathname, 'cm_Wr2l03'),
            indexData: {
                desc: '非常感谢各位对ai智能空间的无偿捐赠,ai智能空间将会持续开发更多更好的应用。',
                about: '特别说明:以下收款二维码仅在全球唯一网站aiplat.com有效,对于全球其他地方或网站出现的均是假冒的。',
                dnarr: [
                    {
                        name: '微信收款',
                        img: require('assets/images/index/donateWX.png')
                    },
                    {
                        name: '支付宝收款',
                        img: require('assets/images/index/donateZFB.png')
                    }
                ]
            }
        }
    }
    tsone(id) {
        this.setState({
            dnid: id
        })
    }
    render() {
        const Hdata = { title: '捐赠我们', imgL: '', imgR: '' }
        return (
            <div className={this.state.win.ani}>
                <Header Hdata={Hdata} />
                <div className="cm_main">
                    <ul className="cm_pc_12 cm_mt3 cm_mb6">
                        <li className="cm_pc_12 cm_prl05 cm_lh105 cm_ti2 cm_mtb05">
                            <span className="">{this.state.indexData.desc}</span>
                        </li>
                        <li className="cm_pc_12 cm_prl05 cm_tc cm_mb05 cm_csp">
                            {this.state.indexData.dnarr.map((v, k) => {
                                const c1 = this.props.donate.dnid == k ? 'cm_c1b cm_cf' : 'cm_be'
                                const c2 = 'cm_pc_6 cm_hl2 ' + c1
                                return (
                                    <div className={c2}
                                        key={k}
                                        onClick={() => this.props.tsone(k)}
                                    >
                                        {v.name}
                                    </div>
                                )
                            })}
                        </li>
                        <li className="cm_pc_12 cm_tc cm_mb05">
                            {this.state.indexData.dnarr.map((v2, k2) => {
                                const c3 = this.props.donate.dnid == k2 ? 'cm_pc_12' : 'cm_dn'
                                return (
                                    <div className={c3}
                                        key={k2}
                                    >
                                        <img className="cm_h17 cm_bs100 cm_fc"
                                            src={v2.img}
                                        />
                                    </div>
                                )
                            })}
                        </li>
                        <li className="cm_pc_12 cm_prl05 cm_lh1 cm_ti2 cm_mb05">
                            <span className="cm_fs08 cm_c1c">{this.state.indexData.about}</span>
                        </li>
                    </ul>
                </div>
                <Beian />
                <Footer path={this.props.location.pathname} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        donate: state.donate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tsone: (id) => {
            dispatch(tsone(id))
        }
    }
}

//export default Index
export default connect(mapStateToProps, mapDispatchToProps)(Index)
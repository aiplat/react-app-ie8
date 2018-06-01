import React,{Component} from 'react'

import {Link} from 'react-router-dom'

import Header from 'components/header'

class Index extends Component{
    constructor(props){
        super(props)
        this.state = {
            win: window.cm.updateAni(1, 'cm_Wr2l04'),
            title:'这里是test2'
        }
    }
    render(){
        const m = this.props.match
        const Hdata = { title: m.url, imgL: require('assets/images/commons/cm_back2.png'), imgR: '' }
        return (
            <div className={this.state.win.ani}>
                <Header Hdata={Hdata}
                    toBackAni={() => window.cm.toBackAni(this,'noAni')}
                />
                <div className="cm_main2">
                    <div className="cm_main">
                        <ul className="cm_pc_12 cm_mt4">
                            <li className="cm_pc_12 cm_tc cm_mb05">
                                <div className="cm_dib cm_hl3 cm_c8b cm_cf cm_prl05 cm_br02">
                                    {this.state.title}
                                </div>
                            </li>
                            <li className="cm_pc_12 cm_tc">
                                <Link className="cm_dib cm_hl3 cm_c3b cm_cf cm_prl05 cm_br02" to="/login.html">
                                    去登录
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index
import React, { Component } from 'react'

class Index extends Component {
    constructor(props) {
        super(props)
    }
    //Hdata = {title:'兼容IE8',imgL:require('assets/images/commons/cm_back2.png'),imgR:require('assets/images/components/ico_refresh_w.png')}
    render() {
        document.title = window.site.name + '-' + this.props.Hdata.title
        const imgL = this.props.Hdata.imgL
            ? (
                <li className="cm_pa cm_tl0 cm_m05 cm_z99"
                    onClick={() => window.cm.ckBackAni(this)}
                >
                    <img className="cm_wh2 cm_bs100"
                        src={this.props.Hdata.imgL}
                    />
                </li>
            ) : ''
        const imgR = this.props.Hdata.imgR
            ? (
                <li className="cm_pa cm_tr0 cm_m05 cm_z99">
                    <img className="cm_wh2 cm_bs100"
                        src={this.props.Hdata.imgR}
                    />
                </li>
            ) : ''
        return (
            <div className="cm_pf cm_tl0 cm_w100 cm_z99">
                <div className="cm_main2">
                    <div className="cm_main">
                        <ul className="cm_pc_12 cm_c2b cm_cf">
                            {imgL}
                            <li className="cm_pc_12 cm_hl3 cm_prl3 cm_tc">{this.props.Hdata.title}</li>
                            {imgR}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index
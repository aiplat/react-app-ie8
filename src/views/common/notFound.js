import React from 'react'

import Header from 'components/header'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            win: window.cm.updateAni(1,''),
            title:'你居然迷路了！'
        }
    }
    render() {
        const Hdata = { title: '404', imgL: require('assets/images/commons/cm_back2.png'), imgR: ''}
        return (
            <div className={this.state.win.ani}>
                <Header Hdata={Hdata}
                    toBackAni={() => window.cm.toBackAni(this,'noAni')}
                />
                <div className="cm_main2">
                    <div className="cm_main">
                        <div className="cm_pc_12 cm_prl2 cm_mt9 cm_tc">
                           <div className="cm_pc_12 cm_hl3 cm_c1b cm_cf cm_br02">{this.state.title}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Index
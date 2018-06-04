import React from 'react'
import { connect } from 'react-redux'
import { ckLog } from 'actions/login'
import Header from 'components/header'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            win: window.cm.updateAni(this, ''),
            title: window.cm.getLS('index')?window.cm.getLS('index'):'你还没有登录哦'
        }

    }
    toLogin() {
        var t = this
        this.props.ckLog(1, function () {
            alert('登录成功')
            t.props.history.replace('/test')
        })
    }
    render() {
        console.log(this)
        const Hdata = { title: '登录', imgL: require('assets/images/commons/cm_back2.png'), imgR: '' }
        return (
            <div className={this.state.win.ani}>
                <Header Hdata={Hdata}
                    toBackAni={() => window.cm.toBackAni(this, 'noAni')}
                />
                <div className="cm_main2">
                    <div className="cm_main">
                        <div className="cm_pc_12 cm_prl2 cm_mt9 cm_tc">
                            <div className="cm_pc_12 cm_hl3 cm_c1b cm_cf cm_br02" onClick={() => this.toLogin()}>{this.props.uid > 0 ? '你已登录' : this.state.title}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        uid: state.login.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ckLog: (uid, func) => {
            dispatch(ckLog(uid, func))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
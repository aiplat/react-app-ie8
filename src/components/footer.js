import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const Len = 'cm_pc_' + this.props.MenuList.length + 'f'
        const path = this.props.path
        return (
            <div className="cm_pf cm_bl0 cm_w100">
                <div className="cm_main2">
                    <div className="cm_main">
                        <div className="cm_pc_12 cm_tc cm_bf cm_bt1ce cm_br1ce cm_bl1ce">
                            {this.props.MenuList.map((m, key) => {
                                const c = path == m.url ? 'cm_fs06 cm_c8c cm_c6b' : 'cm_fs06 cm_c4c'
                                var d = path == m.url ? Len + ' cm_c6b' : Len
                                d = key > 0 ? (d += ' cm_bl1ce') : d
                                return (
                                    <Link className={d}
                                        key={key}
                                        to={m.url}
                                    >
                                        <div className="cm_pc_12 cm_mt02">
                                            <img className="cm_wh105 cm_bs100"
                                                src={path == m.url ? m.imgOn : m.img}
                                            />
                                        </div>
                                        <div className="cm_pc_12 cm_mb02"><span className={c}>{m.name}</span></div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index
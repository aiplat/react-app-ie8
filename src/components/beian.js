import React, { Component } from 'react'

class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="cm_pf cm_bl0 cm_mb3 cm_w100 cm_tc cm_hl2 cm_bf">
                @2016 <a href={window.site.url}
                    target="_blank"
                      >{window.site.site}</a>
            </div>
        )
    }
}

export default Index
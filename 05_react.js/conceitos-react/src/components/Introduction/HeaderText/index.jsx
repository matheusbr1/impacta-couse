import React, { Component } from 'react'

import '../../../App.css'

export default class HeaderText extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="border center" >
                <h1>{this.props.title}</h1>
            </div>
        )
    }

    // render = () => <h1>{this.props.title}</h1>

}
import React, { Component } from 'react'

import IMC from '../index'

export default class GroupIMC extends Component {
    render() {
        return (
            <div className="row" >
                <div className="col-md-4">
                    <IMC />
                </div>
                <div className="col-md-4">
                    <IMC />
                </div>
                <div className="col-md-4">
                    <IMC />
                </div>
            </div>
        )
    }
}
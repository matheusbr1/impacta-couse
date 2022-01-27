import React, { Component } from 'react'

export default class Item extends Component {

    static defaultProps = {
        contact: {}
    }

    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleDelete(id) {
        this.props.delete(id)
    }

    handleChange(id) {
        this.props.change({ id })
    }

    render() {

        const { data, id } = this.props

        return (
            <div className="alert alert-primary font">
                <div>
                    <button className="button" onClick={() => this.handleDelete(id)} >
                        <i className="fa fa-trash-o" ></i>
                    </button>
                    <button className="button-change" onClick={() => this.handleChange(id)} >
                        <i className="fa fa-pencil" ></i>
                    </button>
                </div>
                <div>
                    <span>
                        <strong>Name: </strong> {data.name}
                    </span>
                </div>
                <div>
                    <span>
                        <strong>Telephone: </strong> {data.telephone}
                    </span>
                </div>
                <div>
                    <span>
                        <strong>E-mail: </strong> {data.email}
                    </span>
                </div>
                <div>
                    <span>
                        <strong>Gender: </strong> {data.gender}
                    </span>
                </div>
            </div>
        )
    }
}
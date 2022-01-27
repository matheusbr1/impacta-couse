import React, { Component } from 'react'
import { apiContacts } from '../../services/apiContacts'

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.handleAddContact = this.handleAddContact.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleUpdateClick = this.handleUpdateClick.bind(this)

        this.state = {
            name: '',
            email: '',
            telephone: '',
            gender: 'male',
            updated: false
        }
    }

    async handleAddContact(event) {
        event.preventDefault()
        const { props, state } = this
        await props.addContact(state)
        this.setState({
            name: '',
            email: '',
            telephone: '',
            gender: 'male'
        })
    }

    async componentDidUpdate() {
        const { change, ContactIdforChange } = this.props
        console.log('change', change)
        if (!this.state.updated && change) {
            const data = await apiContacts.listById(ContactIdforChange.id).then(response => {
                console.log(response)
                this.setState({
                    updated: !this.state.countUpdate,
                    name: response.name,
                    email: response.email,
                    telephone: response.telephone,
                    gender: response.gender,
                    id: response.id
                })
            })
        }
    }

    handleInput(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    async handleUpdateClick(event) {
        event.preventDefault()
        const { changeContact, listContacts } = this.props
        console.log(this.state, 'send update')
        await apiContacts.change(this.state).then(response => {
            console.log(response)

            changeContact({ isChangeType: false })

            this.setState({
                name: '',
                email: '',
                telephone: '',
                gender: 'male',
                updated: false
            })

            window.location.reload()
        })
    }

    render() {

        const { change } = this.props

        return (
            <div className="border-right pl-3 pr-3" >
                {(!change) ? <h2>Register contact</h2> : <h2>Change contact</h2>}
                <br />
                <form>
                    <div className="form-group row" >
                        <label
                            htmlFor="name"
                            className="col-md-3 col-form-label" >Name:</label>
                        <div className="col-md-9" >
                            <input
                                onChange={this.handleInput}
                                value={this.state.name}
                                name="name"
                                type="text"
                                className="form-control" id="name" />
                        </div>
                    </div>

                    <div className="form-group row" >
                        <label
                            htmlFor="Email"
                            className="col-md-3 col-form-label" >Email:</label>
                        <div className="col-md-9" >
                            <input
                                onChange={this.handleInput}
                                value={this.state.email}
                                name="email"
                                type="text"
                                className="form-control"
                                id="Email" />
                        </div>
                    </div>

                    <div className="form-group row" >
                        <label
                            htmlFor="Telephone"
                            className="col-md-3 col-form-label" >Telephone:</label>
                        <div
                            className="col-md-9" >
                            <input
                                onChange={this.handleInput}
                                value={this.state.telephone}
                                name="telephone"
                                type="text"
                                className="form-control"
                                id="Telephone" />
                        </div>
                    </div>

                    <div className="form-group row" >
                        <label
                            htmlFor="Gender"
                            className="col-md-3 col-form-label" >Gender:</label>
                        <div className="col-md-9" >
                            <select
                                className="form-control"
                                value={this.state.gender}
                                id="Gender"
                                name="gender"
                                onChange={this.handleInput}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row" >

                        {(!change) ? <button className="btn btn-primary ml-3 mb-3" onClick={this.handleAddContact} >Add</button>
                            : <button className="btn btn-warning ml-3 mb-3" onClick={this.handleUpdateClick} >Change</button>}

                    </div>
                </form>
            </div>
        )
    }
}
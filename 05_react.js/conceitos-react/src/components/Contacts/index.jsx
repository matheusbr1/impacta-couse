import React, { Component } from 'react'

import { apiContacts } from '../../services/apiContacts'

import Form from './Form'
import List from './List'

export default class Contacts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ContactIdforChange: false,
            isChangeType: false,
            contacts: []
        }

        this.addContact = this.addContact.bind(this)
        this.listContacts = this.listContacts.bind(this)
        this.changeContact = this.changeContact.bind(this)
    }

    async addContact(contact) {
        await apiContacts.send(contact).then(response => {
            console.log(response)
            this.listContacts()
        })
    }

    async componentDidMount() {
        this.listContacts()
    }

    async listContacts() {
        const contacts = await apiContacts.list()
        console.log(contacts)
        this.setState({
            contacts
        })
    }

    changeContact({ id, isChangeType }) {

        this.setState({
            isChangeType,
            ContactIdforChange: id
        })

        console.log('change contact', this.state)
    }

    render() {
        return (
            <div className="row border-bottom" >
                <div className="col-md-6" >
                    <Form
                        listContacts={this.listContacts}
                        changeContact={this.changeContact}
                        ContactIdforChange={this.state.ContactIdforChange}
                        change={this.state.isChangeType}
                        addContact={this.addContact} />
                </div>
                <div className="col-md-6" >
                    <List
                        changeContact={this.changeContact}
                        listContacts={this.listContacts}
                        contacts={this.state.contacts} />
                </div>
            </div>
        )
    }
}
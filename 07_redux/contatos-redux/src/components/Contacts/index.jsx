import React, { Component } from 'react'

import { apiContacts } from '../../services/apiContacts'

import Form from './Form'
import List from './List'

import * as ContatosActions from '../../actions/ContatosActions'
import { connect } from 'react-redux'

class Contacts extends Component {

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

    // async listContacts() {
    //     const contacts = await apiContacts.list()
    //     console.log(contacts)
    //     this.setState({
    //         contacts
    //     })
    // }

    async listContacts() {
        this.props.dispatch(ContatosActions.listar)
    }

    changeContact({ id, isChangeType }) {

        this.setState({
            isChangeType,
            ContactIdforChange: id
        })

        console.log('change contact', this.state)
    }

    render() {

        const { props } = this

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
                        // contacts={this.state.contacts}
                        contacts={props.contacts}

                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contatos: state.ContatosReducer.contatos
})

export default connect(mapStateToProps)(Contacts)
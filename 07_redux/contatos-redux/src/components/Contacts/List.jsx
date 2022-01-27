import React, { Component } from 'react'
import { apiContacts } from '../../services/apiContacts'

import Item from './Item'

export default class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contacts: []
        }

        this.delete = this.delete.bind(this)
        this.update = this.update.bind(this)

    }

    async delete(id) {
        const { listContacts } = this.props
        if (window.confirm('Do you want remove this item ?')) {
            await apiContacts.delete(id).then(response => {
                listContacts()
            })
        }
    }

    update(id) {
        const { changeContact } = this.props
        changeContact({ id, isChangeType: true })
    }

    render() {

        const { contacts } = this.props

        return (
            <div>
                <h2>Contacts</h2>
                <div className="menu" >
                    <ul>
                        {(contacts) ? contacts.map(contact =>

                            <li key={contact.id} >
                                <Item key={contact.id} id={contact.id} data={contact} change={this.update} delete={this.delete} />
                            </li>

                        ) :

                            <p> Lista vazia </p>

                        }
                    </ul>
                </div>
            </div>
        )
    }
}
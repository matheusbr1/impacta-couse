export const apiContacts = {
    list() {
        return fetch('http://localhost:3225/wscontacts')
            .then(response => response.json())
    },
    listById(id) {
        return fetch('http://localhost:3225/wscontacts/' + id)
            .then(response => response.json())
    },
    send(contact) {
        return fetch('http://localhost:3225/wscontacts', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Acept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    },
    delete(id) {
        return fetch('http://localhost:3225/wscontacts/' + id, {
            method: 'DELETE'
        }).then(response => response.json())
    },
    change(contact) {
        return fetch('http://localhost:3225/wscontacts/' + contact.id, {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: {
                'Acept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    },
}
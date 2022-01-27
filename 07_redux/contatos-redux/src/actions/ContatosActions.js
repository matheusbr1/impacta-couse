import * as Constantes from './inputTypes'

import { apiContacts } from '../services/apiContacts'

export const listar = () => {
    return async (dispatch) => {
        const contatos = await apiContacts.list()
        dispatch({
            type: Constantes.CONTATO_LISTAR,
            contatos
        })
    }
}
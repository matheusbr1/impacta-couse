import * as Constantes from '../actions/inputTypes'

const estadoInicial = {
    contatos: []
}

export const ContatosReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case Constantes.CONTATO_LISTAR:
            return {
                ...state,
                contatos: action.contatos
            }

        default:
            return state
    }
}
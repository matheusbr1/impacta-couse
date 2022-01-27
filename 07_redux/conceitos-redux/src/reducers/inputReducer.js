import * as Costantes from '../actions/actionTypes'

const estadoInicial = {
    novoValor: '',
    valorAtual: ''
}

export const inputReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case Costantes.CLICK_BOTAO:
            return {
                ...state,
                novoValor: action.novoValor,
                valorAtual: "Após clique: " + action.novoValor
            }
        case Costantes.CHANGE_TEXT:
            return {
                ...state,
                novoValor: action.novoValor
            }
        default:
            return state;
    }
}
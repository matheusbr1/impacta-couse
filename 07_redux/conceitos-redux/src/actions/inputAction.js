import * as Constantes from './actionTypes'

export const clickButton = valor => ({
    type: Constantes.CLICK_BOTAO,
    novoValor: valor
})

export const changeTextValue = e => ({
    type: Constantes.CHANGE_TEXT,
    novoValor: e.target.value
})
import { combineReducers } from 'redux'
import { inputReducer } from './inputReducer'

export const Reducers = combineReducers({
    inputButton: inputReducer
})
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import Reducers from '../reducers/rootReducer'

const store = createStore(Reducers, applyMiddleware(thunkMiddleware))

export default store
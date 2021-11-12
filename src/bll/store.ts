import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {loadingReducer} from "./loadingReducer";
import {loginReducer} from "./loginReducer";


const reducers = combineReducers({
    loading: loadingReducer,
    login: loginReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
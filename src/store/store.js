import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import commonReducer from "./commonReducer";
import boozeReducer from "./boozeReducer";

const reducers = combineReducers({
    common: commonReducer,
    booze: boozeReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

window.store = store

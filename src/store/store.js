import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import commonReducer from "./commonReducer";
import cocktailsReducer from "./cocktailsReducer";

const reducers = combineReducers({
    common: commonReducer,
    cocktails: cocktailsReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

window.store = store

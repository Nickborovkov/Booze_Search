import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import commonReducer from "./commonReducer";
import cocktailsReducer from "./cocktailsReducer";
import ingredientsReducer from "./ingredientsReducer";

const reducers = combineReducers({
    common: commonReducer,
    cocktails: cocktailsReducer,
    ingredients: ingredientsReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

window.store = store

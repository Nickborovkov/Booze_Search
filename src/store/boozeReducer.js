import {searchForBooze} from "../API/serverRequests";
import {addNewError, setIsLoading} from "./commonReducer";

const SET_COCKTAILS = `cocktailsDB/cocktails/SET_COCKTAILS`
const SET_SPECIFIC_COCKTAIL = `cocktailsDB/cocktails/SET_SPECIFIC_COCKTAIL`
const SET_INGREDIENT = `cocktailsDB/cocktails/SET_INGREDIENT`


const initialState = {
    boozeList: null,
    specificBooze: null,
    ingredient: null,
}


const boozeReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SET_COCKTAILS:
            return {
                ...state,
                boozeList: action.boozeList
            }
        case SET_SPECIFIC_COCKTAIL:
            return {
                ...state,
                specificBooze: action.specificBooze
            }
        case SET_INGREDIENT:
            return {
                ...state,
                ingredient: action.ingredient
            }
        default:
            return state
    }
}

export default boozeReducer


//AC
const setCoctails = (boozeList) =>
    ({type: SET_COCKTAILS, boozeList})

const setSpecificCocktail = (specificBooze) =>
    ({type: SET_SPECIFIC_COCKTAIL, specificBooze})

const setIngredient = (ingredient) =>
    ({type: SET_INGREDIENT, ingredient})

//THUNK
export const getCocktailsByName = (cocktailName) => async dispatch => {
    try {
        dispatch(setIsLoading(true))
        dispatch(addNewError(null))
        const response = await searchForBooze.getBoozeByName(cocktailName)
        if(response.data.drinks){
            dispatch(setCoctails(response.data.drinks))
        }else {
            dispatch(addNewError(`No results`))
        }
        dispatch(setIsLoading(false))
    }catch (error) {
        dispatch(addNewError(error.name))
    }
}

export const getCocktailsByIngredient = (cocktailName) => async dispatch => {
    try {
        dispatch(setIsLoading(true))
        dispatch(addNewError(null))
        const response = await searchForBooze.getBoozeByIngredient(cocktailName)
        if(response.data.drinks){
            dispatch(setCoctails(response.data.drinks))
        }else {
            dispatch(addNewError(`No results`))
        }
        dispatch(setIsLoading(false))
    }catch (error) {
        dispatch(addNewError(error.name))
    }
}

export const getSpecificCocktail = (cocktailId) => async dispatch => {
    try {
        dispatch(setIsLoading(true))
        const response = await searchForBooze.getBoozeByID(cocktailId)
        dispatch(setSpecificCocktail(response.data.drinks[0]))
        dispatch(setIsLoading(false))
    }catch (error) {
        dispatch(addNewError(error.name))
    }

}

export const getIngredientByName = (ingredientName) => async dispatch => {
    try {
        dispatch(setIsLoading(true))
        const response = await searchForBooze.getIngredientByName(ingredientName)
        dispatch(setIngredient(response.data.ingredients[0]))
        dispatch(setIsLoading(false))
    }catch (error) {
        dispatch(addNewError(error.name))
    }

}

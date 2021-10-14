import {setIsLoading} from "./commonReducer";
import {searchForIngredients} from "../API/serverRequests";

const SET_INGREDIENTS = `cocktailsDB/ingredients/SET_INGREDIENTS`
const SET_SPECIFIC_INGREDIENT = `cocktailsDB/ingredients/SET_SPECIFIC_INGREDIENT`


const initialState = {
    ingredientsList: null,
    specificIngredient: null
}


const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INGREDIENTS:
            return {
                ...state,
                ingredientsList: action.ingredientsList
            }
        case SET_SPECIFIC_INGREDIENT:
            return {
                ...state,
                specificIngredient: action.specificIngredient
            }
        default:
            return state
    }
}

export default ingredientsReducer


//AC
const setIngredientsList = (ingredientsList) =>
    ({type: SET_INGREDIENTS, ingredientsList})

const setSpecificIngredient = (specificIngredient) =>
    ({type: SET_SPECIFIC_INGREDIENT, specificIngredient})


//THUNK
export const getIngredientsList = (ingredientName) => async dispatch => {
    dispatch(setIsLoading(true))
    const response = await searchForIngredients.getIngredientsByName(ingredientName)
    dispatch(setIngredientsList(response.data.drinks))
    dispatch(setIsLoading(false))
}

export const getIngredientsCocktail = (ingredientId) => async dispatch => {
    dispatch(setIsLoading(true))
    const response = await searchForIngredients.getIngredientByID(ingredientId)
    dispatch(setSpecificIngredient(response.data))
    dispatch(setIsLoading(false))
}

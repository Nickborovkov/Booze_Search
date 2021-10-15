import {searchForCoctails} from "../API/serverRequests";
import {addNewError, setIsLoading} from "./commonReducer";

const SET_COCKTAILS = `cocktailsDB/cocktails/SET_COCKTAILS`
const SET_SPECIFIC_COCKTAIL = `cocktailsDB/cocktails/SET_SPECIFIC_COCKTAIL`


const initialState = {
    cocktailsList: null,
    specificCocktail: null
}


const cocktailsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SET_COCKTAILS:
            return {
                ...state,
                cocktailsList: action.cocktailsList
            }
        case SET_SPECIFIC_COCKTAIL:
            return {
                ...state,
                specificCocktail: action.specificCocktail
            }
        default:
            return state
    }
}

export default cocktailsReducer


//AC
const setCoctails = (cocktailsList) =>
    ({type: SET_COCKTAILS, cocktailsList})

const setSpecificCocktail = (specificCocktail) =>
    ({type: SET_SPECIFIC_COCKTAIL, specificCocktail})


//THUNK
export const getCocktailsByName = (cocktailName) => async dispatch => {
    try {
        dispatch(setIsLoading(true))
        dispatch(addNewError(null))
        const response = await searchForCoctails.getCocktailsByName(cocktailName)
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
        const response = await searchForCoctails.getCocktailsByIngredient(cocktailName)
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
        const response = await searchForCoctails.getCocktailByID(cocktailId)
        dispatch(setSpecificCocktail(response.data.drinks[0]))
        dispatch(setIsLoading(false))
    }catch (error) {
        dispatch(addNewError(error.name))
    }

}

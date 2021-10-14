import {searchForCoctails} from "../API/serverRequests";
import {setIsLoading} from "./commonReducer";

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
const setCoctailsList = (cocktailsList) =>
    ({type: SET_COCKTAILS, cocktailsList})

const setSpecificCocktail = (specificCocktail) =>
    ({type: SET_SPECIFIC_COCKTAIL, specificCocktail})


//THUNK
export const getCocktailsList = (cocktailName) => async dispatch => {
    dispatch(setIsLoading(true))
    const response = await searchForCoctails.getCocktailsByName(cocktailName)
    dispatch(setCoctailsList(response.data.drinks))
    dispatch(setIsLoading(false))
}

export const getSpecificCocktail = (cocktailId) => async dispatch => {
    dispatch(setIsLoading(true))
    const response = await searchForCoctails.getCocktailByID(cocktailId)
    dispatch(setSpecificCocktail(response.data.drinks[0]))
    dispatch(setIsLoading(false))
}

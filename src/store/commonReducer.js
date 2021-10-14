const ADD_NEW_ERROR = `mui_test/common/ADD_NEW_ERROR`
const SET_IS_LOADING = `mui_test/common/SET_IS_LOADING`


const initialState = {
    error: null,
    isLoading: null,
}


const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export default commonReducer


//AC
export const addNewError = (error) =>
    ({type: ADD_NEW_ERROR, error})

export const setIsLoading = (isLoading) =>
    ({type: SET_IS_LOADING, isLoading})

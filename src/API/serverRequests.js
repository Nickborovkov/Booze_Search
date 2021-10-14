import axios from "axios";

const instance = axios.create({
    baseURL: `https://www.thecocktaildb.com/api/json/v1/1/`,
})


export const searchForCoctails = {
    getCocktailsByName (cocktailName = `margarita`) {
        return instance.get(`search.php?s=${cocktailName}`)
    },
    getCocktailByID (cocktailId = 11007) {
        return instance.get(`lookup.php?i=${cocktailId}`)
    },
}


export const searchForIngredients = {
    getIngredientsByName (ingredientName = `gin`) {
        return instance.get(`filter.php?i=${ingredientName}`)
    },
    getIngredientByID (ingredientId = 552) {
        return instance.get(`search.php?iid=${ingredientId}`)
    },
}

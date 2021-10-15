import axios from "axios";

const instance = axios.create({
    baseURL: `https://www.thecocktaildb.com/api/json/v1/1/`,
})


export const searchForCoctails = {
    getCocktailsByName (cocktailName = `margarita`) {
        return instance.get(`search.php?s=${cocktailName}`)
    },
    getCocktailsByIngredient (ingredientName = `gin`) {
        return instance.get(`filter.php?i=${ingredientName}`)
    },
    getCocktailByID (cocktailId = 11007) {
        return instance.get(`lookup.php?i=${cocktailId}`)
    },
}

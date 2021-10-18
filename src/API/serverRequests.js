import axios from "axios";

const instance = axios.create({
    baseURL: `https://www.thecocktaildb.com/api/json/v1/1/`,
})


export const searchForBooze = {
    getBoozeByName (cocktailName) {
        return instance.get(`search.php?s=${cocktailName}`)
    },
    getBoozeByIngredient (ingredientName) {
        return instance.get(`filter.php?i=${ingredientName}`)
    },
    getBoozeByID (cocktailId) {
        return instance.get(`lookup.php?i=${cocktailId}`)
    },
    getIngredientByName (ingredientName) {
        return instance.get(`search.php?i=${ingredientName}`)
    },
}

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../common/preloader/Preloader";
import {getSpecificCocktail} from "../../../store/cocktailsReducer";

const SpecificCocktail = (props) => {

    const dispatch = useDispatch()

    const cocktailId = props.match.params.id
    const specificCocktail = useSelector(state => state.cocktails.specificCocktail)
    const isLoading = useSelector(state => state.common.isLoading)

    useEffect(()=>{
        dispatch(getSpecificCocktail(cocktailId))
    },[dispatch, cocktailId])

    return (
        <div>
            {cocktailId}

            {isLoading && <Preloader/>}

            {specificCocktail && <div>
                <img src={specificCocktail.strDrinkThumb} alt="cocktailImage"/>
                <p>{specificCocktail.strDrink}</p>
                <p>{specificCocktail.strTags}</p>
                <p>{specificCocktail.strCategory}</p>
                <p>{specificCocktail.strIBA}</p>
                <p>{specificCocktail.strGlass}</p>
                <p>{specificCocktail.strInstructions}</p>

                {specificCocktail.strIngredient1 &&
                <p>{specificCocktail.strIngredient1}</p>}
                {specificCocktail.strIngredient2 &&
                <p>{specificCocktail.strIngredient2}</p>}
                {specificCocktail.strIngredient3 &&
                <p>{specificCocktail.strIngredient3}</p>}
                {specificCocktail.strIngredient4 &&
                <p>{specificCocktail.strIngredient4}</p>}
                {specificCocktail.strIngredient5 &&
                <p>{specificCocktail.strIngredient5}</p>}
                {specificCocktail.strIngredient6 &&
                <p>{specificCocktail.strIngredient6}</p>}
                {specificCocktail.strIngredient7 &&
                <p>{specificCocktail.strIngredient7}</p>}
                {specificCocktail.strIngredient8 &&
                <p>{specificCocktail.strIngredient8}</p>}
                {specificCocktail.strIngredient9 &&
                <p>{specificCocktail.strIngredient9}</p>}
                {specificCocktail.strIngredient10 &&
                <p>{specificCocktail.strIngredient10}</p>}
                {specificCocktail.strIngredient11 &&
                <p>{specificCocktail.strIngredient11}</p>}
                {specificCocktail.strIngredient12 &&
                <p>{specificCocktail.strIngredient12}</p>}
                {specificCocktail.strIngredient13 &&
                <p>{specificCocktail.strIngredient13}</p>}
                {specificCocktail.strIngredient14 &&
                <p>{specificCocktail.strIngredient14}</p>}
                {specificCocktail.strIngredient15 &&
                <p>{specificCocktail.strIngredient15}</p>}

            </div>}

        </div>
    )
}

export default SpecificCocktail

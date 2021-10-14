import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientsList} from "../../store/ingredientsReducer";
import Grid from "@mui/material/Grid";
import IngredientItem from "./ingredientItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Preloader from "../common/preloader/Preloader";

const Ingredients = () => {

    const dispatch = useDispatch()
    const ingredientsList = useSelector(state => state.ingredients.ingredientsList)
    const isLoading = useSelector(state => state.common.isLoading)

    const [ingredient, setIngredient] = useState(``)

    useEffect(() => {
        if(ingredient === ``){
            dispatch(getIngredientsList(`vodka`))
        }else {
            dispatch(getIngredientsList(ingredient))
        }
    },[dispatch, ingredient])

    const handleChange = (e) => {
        setIngredient(e.target.value)
    }

    return (
        <div>
            <Typography  variant="h2" align='center' mt={3}>
                Search cocktails by ingredient
            </Typography>

            <Box sx={{width: `20%`, margin: `auto`}} pt={3}>
                <TextField
                    label="Search for cocktails"
                    variant="outlined"
                    value={ingredient}
                    onChange={handleChange}
                    fullWidth
                    helperText="Requires full ingredient name"
                />
            </Box>

            {isLoading && <Preloader/>}

            {!isLoading && ingredientsList &&
            <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{width: `80%`, margin: `50px auto`}}
            >
                {
                    ingredientsList.map(item => <IngredientItem key={item.idDrink} item={item}/>)
                }
            </Grid>}

        </div>
    )
}

export default Ingredients

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@mui/material/Grid";
import IngredientItem from "./IngredientItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Skeleton from "@mui/material/Skeleton";
import {getCocktailsByIngredient} from "../../store/cocktailsReducer";

const SearchByIngredient = () => {

    const dispatch = useDispatch()
    const cocktailsList = useSelector(state => state.cocktails.cocktailsList)
    const isLoading = useSelector(state => state.common.isLoading)
    const error = useSelector(state => state.common.error)

    const [ingredient, setIngredient] = useState(``)

    useEffect(() => {
        if(ingredient === ``){
            dispatch(getCocktailsByIngredient(`beer`))
        }else {
            dispatch(getCocktailsByIngredient(ingredient))
        }
        window.scrollTo(-300, 0)
    },[dispatch, ingredient])

    const handleChange = (e) => {
        setIngredient(e.target.value)
    }

    return (
        <Box>
            <Typography  variant="h3" align='center' mt={3} sx={{color: `#00e676`}}>
                Search cocktails by ingredient
            </Typography>

            <Box sx={{width: `80%`, margin: `auto`}} pt={3}>
                <TextField
                    label="Search for cocktails"
                    variant="outlined"
                    value={ingredient}
                    onChange={handleChange}
                    fullWidth
                    helperText="Requires full ingredient name"
                    color={`input`}
                />
            </Box>

            {error &&
            <Typography
                variant="h3"
                align='center'
                sx={{color: `#e53935`}}
            >
                {error}
            </Typography>}

            {isLoading && !error &&
            <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{width: `80%`, margin: `50px auto`}}
            >
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Skeleton variant="rectangular" height={400} animation="wave"/>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Skeleton variant="rectangular" height={400} animation="wave"/>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Skeleton variant="rectangular" height={400} animation="wave"/>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Skeleton variant="rectangular" height={400} animation="wave"/>
                </Grid>
            </Grid>}

            {!isLoading && cocktailsList && !error &&
            <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{width: `80%`, margin: `50px auto`}}
            >
                {
                    cocktailsList.map(item => <IngredientItem key={item.idDrink} item={item}/>)
                }
            </Grid>}

        </Box>
    )
}

export default SearchByIngredient

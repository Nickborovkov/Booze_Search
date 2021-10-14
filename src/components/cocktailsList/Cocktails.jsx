import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCocktailsList} from "../../store/cocktailsReducer";
import Preloader from "../common/preloader/Preloader";
import CocktailItem from "./CocktailItem";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Cocktails = () => {

    const dispatch = useDispatch()
    const cocktailsList = useSelector(state => state.cocktails.cocktailsList)
    const isLoading = useSelector(state => state.common.isLoading)

    const [cocktail, setCocktail] = useState(``)

    useEffect(() => {
        if(cocktail === ``){
            dispatch(getCocktailsList(`margarita`))
        }else {
            dispatch(getCocktailsList(cocktail))
        }
    },[dispatch, cocktail])

    const handleChange = (e) => {
        setCocktail(e.target.value)
    }

    return (
        <div>
            <Typography  variant="h2" align='center' mt={3}>
                Search cocktails by name
            </Typography>

            <Box sx={{width: `20%`, margin: `auto`}} pt={3}>
                <TextField
                    label="Search for cocktails"
                    variant="outlined"
                    value={cocktail}
                    onChange={handleChange}
                    fullWidth
                />
            </Box>

            {isLoading && <Preloader/>}

            {!isLoading && cocktailsList &&
            <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{width: `80%`, margin: `50px auto`}}
            >
                {
                    cocktailsList.map(item => <CocktailItem key={item.idDrink} item={item}/>)
                }
            </Grid>}

        </div>
    )
}

export default Cocktails

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCocktailsByName} from "../../store/cocktailsReducer";
import CocktailItem from "./CocktailItem";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const SearchByCocktail = () => {

    const dispatch = useDispatch()
    const cocktailsList = useSelector(state => state.cocktails.cocktailsList)
    const isLoading = useSelector(state => state.common.isLoading)
    const error = useSelector(state => state.common.error)

    const [cocktail, setCocktail] = useState(``)

    useEffect(() => {
        if(cocktail === ``){
            dispatch(getCocktailsByName(`margarita`))
        }else {
            dispatch(getCocktailsByName(cocktail))
        }
        window.scrollTo(-300, 0)
    },[dispatch, cocktail])

    const handleChange = (e) => {
        setCocktail(e.target.value)
    }

    return (
        <Box>
            <Typography  variant="h3" align='center' mt={3} sx={{color: `#00e676`}}>
                Search cocktails by name
            </Typography>

            <Box sx={{width: `80%`, margin: `auto`}} pt={3}>
                <TextField
                    error={error}
                    label="Search for cocktails"
                    variant="outlined"
                    value={cocktail}
                    onChange={handleChange}
                    fullWidth
                    color={`input`}
                />
            </Box>

            {error &&
            <Box mt={4} mb={4}>
                <Typography
                    variant="h3"
                    align='center'
                    sx={{color: `#e53935`}}
                >
                    {error}
                </Typography>
            </Box>}

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
                    cocktailsList.map(item => <CocktailItem key={item.idDrink} item={item}/>)
                }
            </Grid>}

        </Box>
    )
}

export default SearchByCocktail

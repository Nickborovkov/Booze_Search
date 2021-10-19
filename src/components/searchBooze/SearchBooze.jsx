import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCocktailsByIngredient, getCocktailsByName} from "../../store/boozeReducer";
import BoozeItem from "./BoozeItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import SearchField from "../common/searchField/SearchField";

const SearchBooze = ({searchType}) => {

    //State
    const dispatch = useDispatch()
    const boozeList = useSelector(state => state.booze.boozeList)
    const redirectIngredient = useSelector(state => state.booze.redirectIngredient)
    const isLoading = useSelector(state => state.common.isLoading)
    const error = useSelector(state => state.common.error)

    //Set cocktails
    const [cocktail, setCocktail] = useState(`rum`)

    //Update cocktails
    useEffect(() => {
        if(searchType === `byName`){
            dispatch(getCocktailsByName(cocktail))
        }else if(searchType === `byIngredient`){
            dispatch(getCocktailsByIngredient(cocktail))
        }
        window.scrollTo(-300, 0)
    },[dispatch, cocktail, searchType])

    //Setting Cocktails with ingredient from ingredients component
    useEffect(()=>{
        if(redirectIngredient){
            dispatch(getCocktailsByIngredient(redirectIngredient))
        }
    },[dispatch, redirectIngredient])

    return (
        <Box>
            {/*Title*/}
            <Typography
                variant="h3"
                align='center'
                mt={3}
                sx={{color: `#00e676`}}
            >
                {searchType === `byName` && `Search Cocktails By Name`}
                {searchType === `byIngredient` && `Search Cocktails By Ingredient`}
            </Typography>

            {/*SearchField*/}
            <SearchField
                searchType={searchType}
                items={cocktail}
                redirectIngredient={redirectIngredient}
                setItems={setCocktail}/>

            {/*Error case*/}
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

            {/*Skeleton preloader*/}
            {isLoading && !error &&
            <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{width: `80%`, margin: `50px auto`}}
            >
                {
                    [1,2,3,4].map(item => <Grid key={item} item xs={12} md={6} lg={4} xl={3}>
                        <Skeleton variant="rectangular" height={400} animation="wave"/>
                    </Grid>)
                }
            </Grid>}

            {/*Received items*/}
            {!isLoading && boozeList && !error &&
            <Grid
                container
                spacing={0}
                justifyContent="center"
                sx={{width: `80%`, margin: `50px auto`}}
            >
                {
                    boozeList.map(item =>
                        <BoozeItem
                            key={item.idDrink}
                            item={item}
                        />)
                }
            </Grid>}

        </Box>
    )
}

export default SearchBooze

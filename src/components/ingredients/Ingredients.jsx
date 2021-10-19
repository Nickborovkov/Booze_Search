import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientByName} from "../../store/boozeReducer";
import Preloader from "../common/preloader/Preloader";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";

const Ingredients = (props) => {

    const dispatch = useDispatch()
    const ingredientName = props.match.params.name
    const ingredient = useSelector(state => state.booze.ingredient)
    const isLoading = useSelector(state => state.common.isLoading)

    useEffect(()=>{
        dispatch(getIngredientByName(ingredientName))
    },[dispatch, ingredientName])

    return (
        <div>

            {isLoading && <Preloader/>}

            {!isLoading && ingredient &&
            <Box sx={{display: `flex`, justifyContent: `center`}} pt={5} pb={5}>
                <Card sx={{ maxWidth: `80%` }}>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                            {ingredient.strIngredient}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            <span style={{color: `#00e676`}}>Is alcoholic: </span>{ingredient.strAlcohol || `No info`}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            <span style={{color: `#00e676`}}>ABV°: </span>{ingredient.strABV || `No info`}
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                            <span style={{color: `#00e676`}}>Description: </span>{ingredient.strDescription  || `No info`}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            color='button'
                            variant="contained"
                            size="small"
                            onClick={ () => {props.history.goBack()} }
                        >
                            Go back
                        </Button>
                        <Button
                            color='button'
                            variant="contained"
                            size="small"
                        >
                            <NavLink
                                to={`/cocktails/ByIngredient`}
                                style={{textDecoration: `none`, color: `#ffffff`}}
                            >
                                More booze with this ingredient
                            </NavLink>
                        </Button>
                    </CardActions>
                </Card>
            </Box>}
        </div>
    )
}

export default Ingredients

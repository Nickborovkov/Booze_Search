import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSpecificCocktail} from "../../store/cocktailsReducer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ModalWindow from "../common/modalWindow/ModalWindow";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

const SpecificCocktail = (props) => {

    const dispatch = useDispatch()

    const cocktailId = props.match.params.id
    const specificCocktail = useSelector(state => state.cocktails.specificCocktail)
    const isLoading = useSelector(state => state.common.isLoading)

    useEffect(()=>{
        dispatch(getSpecificCocktail(cocktailId))
    },[dispatch, cocktailId])

    const [modal, setModal] = useState(false)

    return (
        <Box>

            <Box sx={{display: `flex`, justifyContent: `center`}} mt={3} mb={5}>
                <Button
                    variant='contained'
                    color={'button'}
                    onClick={ () => {props.history.goBack()} }
                >Go back</Button>
            </Box>

            {isLoading &&
            <Grid container
                  spacing={2}
                  justifyContent="center"
            >
                <Grid item xs={12} md={10} mb={6}>
                    <Skeleton variant="rectangular" height={60} animation="wave"/>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <Skeleton variant="rectangular" height={400} animation="wave"/>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <Skeleton variant="rectangular" height={400} animation="wave"/>
                </Grid>
            </Grid>}

            {!isLoading && specificCocktail &&
                <Box sx={{width: `90%`, margin: `50px auto`}}>

                    <Typography align='center' variant='h3' mb={5} sx={{color: `#00e676`}}>
                        {specificCocktail.strDrink}
                    </Typography>

                    <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                    >
                        <Grid item xs={12} md={6} lg={5}>
                            <Card sx={{ boxShadow: 3 }}>
                                <CardMedia
                                    component="img"
                                    alt="cocktailImage"
                                    height="500"
                                    image={specificCocktail.strDrinkThumb}
                                    sx={{cursor: `pointer`}}
                                    onClick={ () => {(setModal(true))} }
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={5}>
                            <Card sx={{ boxShadow: 3 }}>

                                <CardContent>

                                    {[`strCategory`, `strIBA`, `strGlass`, `strAlcoholic`].map(item => {
                                        if (specificCocktail[item]) {
                                            return (
                                                <Box key={item}>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        {`${item.slice(3)}: ${specificCocktail[item]}`}
                                                    </Typography>
                                                    <Divider></Divider>
                                                </Box>
                                            )
                                        }
                                        return null
                                    })}

                                    <Typography gutterBottom variant="h6" component="div">
                                        Ingredients:
                                    </Typography>

                                    <List>
                                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(item => {
                                            if(specificCocktail[`strIngredient${item}`]){
                                                return (
                                                    <ListItem key={item}>
                                                        <ListItemText
                                                            primary={specificCocktail[`strIngredient${item}`]}/>
                                                    </ListItem>
                                                )
                                            }
                                            return null
                                        })}
                                    </List>

                                    {specificCocktail.strInstructions &&
                                        <Box>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Instructions:
                                            </Typography>
                                            <Typography gutterBottom variant="p" component="div">
                                                {specificCocktail.strInstructions}
                                            </Typography>
                                        </Box>}

                                </CardContent>
                            </Card>

                        </Grid>

                    </Grid>

                    <ModalWindow modal={modal}
                                 setModal={setModal}
                    >
                        <img
                            src={specificCocktail.strDrinkThumb}
                            alt="cocktailImage"
                            style={{height: `90%`}}
                        />
                    </ModalWindow>

                </Box>
            }

        </Box>
    )
}

export default SpecificCocktail

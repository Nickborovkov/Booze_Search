import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSpecificCocktail} from "../../store/boozeReducer";
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
import {NavLink} from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import ListItemIcon from "@mui/material/ListItemIcon";
import imagePlaceholder from "../../assets/images/imagePlaceholder.jpg"

const SpecificBooze = (props) => {

    //State
    const dispatch = useDispatch()
    const cocktailId = props.match.params.id
    const specificCocktail = useSelector(state => state.booze.specificBooze)
    const isLoading = useSelector(state => state.common.isLoading)

    //Load cocktail
    useEffect(() => {
        dispatch(getSpecificCocktail(cocktailId))
        window.scrollTo(-300, 0)
    }, [dispatch, cocktailId])

    const [modal, setModal] = useState(false)

    return (
        <Box>
            {/*Title*/}
            <Box
                sx={{display: `flex`, justifyContent: `center`}}
                mt={3} mb={5}
            >
                <Button
                    variant='contained'
                    color={'button'}
                    onClick={() => {
                        props.history.goBack()
                    }}
                >Go back</Button>
            </Box>

            {/*Skeleton preloader*/}
            {isLoading &&
            <Grid container
                  spacing={2}
                  justifyContent="center"
            >
                <Grid
                    item
                    xs={12} md={10} mb={6}
                >
                    <Skeleton
                        variant="rectangular"
                        height={60}
                        animation="wave"
                    />
                </Grid>
                {
                    [1, 2].map(unit => <Grid
                        item
                        key={unit}
                        xs={12} md={6} lg={5}
                    >
                        <Skeleton
                            variant="rectangular"
                            height={400}
                            animation="wave"
                        />
                    </Grid>)
                }

            </Grid>}

            {/*Received items*/}
            {!isLoading && specificCocktail &&
            <Box
                sx={{width: `90%`, margin: `50px auto`}}
            >
                <Typography
                    align='center'
                    variant='h3'
                    mb={5} sx={{color: `#00e676`}}
                >
                    {specificCocktail.strDrink}
                </Typography>

                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                >
                    <Grid
                        item
                        xs={12} md={6} lg={5}
                    >
                        <Card sx={{boxShadow: 3}}>
                            <CardMedia
                                component="img"
                                alt="cocktailImage"
                                height="500"
                                image={specificCocktail.strDrinkThumb || imagePlaceholder}
                                sx={{cursor: `pointer`}}
                                onClick={() => {
                                    (setModal(true))
                                }}
                            />
                        </Card>
                    </Grid>
                    <Grid
                        item xs={12} md={6} lg={5}
                    >
                        <Card sx={{boxShadow: 3}}>

                            <CardContent>
                                {[`strCategory`, `strIBA`, `strGlass`, `strAlcoholic`].map(item => {
                                    if (specificCocktail[item]) {
                                        return (
                                            <Box key={item}>
                                                <Typography
                                                    gutterBottom
                                                    variant="h6"
                                                    component="div"
                                                >
                                                    {`${item.slice(3)}: ${specificCocktail[item]}`}
                                                </Typography>
                                                <Divider></Divider>
                                            </Box>
                                        )
                                    }
                                    return null
                                })}

                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                >
                                    Ingredients:
                                </Typography>

                                <List>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => {
                                        if (specificCocktail[`strIngredient${item}`]) {
                                            return (
                                                <NavLink
                                                    to={`/ingredient/${specificCocktail[`strIngredient${item}`]}`}
                                                    style={{textDecoration: `none`, color: `#000000`}}
                                                    key={item}
                                                >
                                                    <ListItem>
                                                        <ListItemText
                                                            primary={specificCocktail[`strIngredient${item}`]}
                                                            />
                                                        <ListItemIcon>
                                                            <InfoIcon/>
                                                        </ListItemIcon>
                                                    </ListItem>
                                                </NavLink>
                                            )
                                        }
                                        return null
                                    })}
                                </List>

                                {specificCocktail.strInstructions &&
                                <Box>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        Instructions:
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="p"
                                        component="div"
                                    >
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

export default SpecificBooze

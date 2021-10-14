import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import {NavLink} from "react-router-dom";

const IngredientItem = ({item}) => {
    return (
        <Grid item xs={12} md={6} lg={4} xl={3}>
            <NavLink to={`/ingredient/${item.idDrink}`} style={{textDecoration: `none`}}>
                <Card>
                    <CardMedia
                        component="img"
                        height="400"
                        image={item.strDrinkThumb}
                        alt="drinkImage"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.strDrink}
                        </Typography>
                    </CardContent>
                </Card>
            </NavLink>
        </Grid>
    )
}

export default IngredientItem

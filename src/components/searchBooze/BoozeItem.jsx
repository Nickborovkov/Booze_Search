import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";
import imagePlaceholder from "../../assets/images/imagePlaceholder.jpg"

const BoozeItem = ({item}) => {
    return (
        <Grid
            item
            xs={12} md={6} lg={4} xl={3}
            sx={{margin: `10px`}}
        >
            <NavLink
                to={`/cocktails/cocktail/${item.idDrink}`}
                style={{textDecoration: `none`}}
            >
                <Card>
                    <CardMedia
                        component="img"
                        height="400"
                        image={item.strDrinkThumb || imagePlaceholder}
                        alt="drinkImage"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {item.strDrink}
                        </Typography>
                    </CardContent>
                </Card>
            </NavLink>
        </Grid>

    )
}

export default BoozeItem

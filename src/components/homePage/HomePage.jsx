import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const HomePage = (props) => {
    return (
        <Box>
            <Typography
                variant="h3"
                align='center'
                mt={3}
                sx={{color: `#333333`}}
            >
                Find yourself a nice booze receipt
            </Typography>
            <Box
                sx={{display: `flex`, justifyContent: `center`}}
                mt={10} mb={20}
            >
                <Button
                    variant='contained'
                    color={'button'}
                    onClick={ () => {props.history.push(`/cocktails/ByName`)} }
                >Get started</Button>
            </Box>
        </Box>

    )
}

export default HomePage

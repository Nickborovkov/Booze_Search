import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ErrorPage = (props) => {
    return (
        <Box>
            <Box
                sx={{display: `flex`, justifyContent: `center`}}
                mt={3} mb={5}
            >
                <Button
                    variant='contained'
                    color={'button'}
                    onClick={ () => {props.history.goBack()} }
                >Go back</Button>
            </Box>
            <Typography
                align='center'
                variant='h3'
                mb={15}
                sx={{color: `#333333`}}
            >
                Requested page does not exist
            </Typography>
        </Box>
    )
}

export default ErrorPage

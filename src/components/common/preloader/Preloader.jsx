import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Preloader = () => {
    return (
        <Box
            sx={{width: `40%`, margin: `100px auto`}}
        >
            <LinearProgress
                color={`preloader`}
                sx={{height: `30px`}}
            />
        </Box>
    )
}

export default Preloader

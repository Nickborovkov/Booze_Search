import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const AppFooter = () => {
    return (
        <AppBar
            position="static"
            color="primary"
            sx={{ top: 'auto', bottom: 0 }}
        >
            <Toolbar>
                <Link
                    href='https://www.thecocktaildb.com/api.php'
                    underline="none"
                    target="_blank"
                    rel="noopener"
                    sx={{color: `#00e676`}}
                >
                    <Box
                        sx={{display: `flex`, justifyContent: `center`, alignItems: `center`}}
                    >
                        <LinkIcon/>
                        <p>API</p>
                    </Box>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Link
                    href='https://github.com/Nickborovkov'
                    underline="none"
                    target="_blank"
                    rel="noopener"
                    sx={{color: `#00e676`}}
                    >
                    <Box
                        sx={{display: `flex`, justifyContent: `center`, alignItems: `center`}}
                    >
                        <GitHubIcon/>
                        <p>Made by Nick Borovkov</p>
                    </Box>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default AppFooter

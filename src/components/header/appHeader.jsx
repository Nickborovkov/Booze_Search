import React, {useState} from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from "./menuDrawer";
import {NavLink} from "react-router-dom";

const AppHeader = () => {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        if(open){
            setOpen(false)
        }else if(!open){
            setOpen(true)
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={toggleMenu}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <NavLink to='/'style={{textDecoration: `none`, color: `#fff`}}>
                            Cocktails app
                        </NavLink>
                    </Typography>

                    <NavLink to='/cocktails' style={{textDecoration: `none`, color: `#fff`}}>
                        <Button color="inherit">Search by cocktails</Button>
                    </NavLink>
                    <NavLink to='/ingredients' style={{textDecoration: `none`, color: `#fff`}}>
                        <Button color="inherit">Search by ingredients</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>

            <MenuDrawer open = {open}
                        setOpen = {setOpen}/>

        </Box>
    )
}

export default AppHeader

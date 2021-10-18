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
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import appLogo from '../../assets/images/appLogo.png'

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
            <AppBar position="fixed">
                <Toolbar>

                    <Box display={{ xs: 'block', md: 'none' }}>
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
                    </Box>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <NavLink to='/'style={{textDecoration: `none`, color: `#fff`, display: `flex`}}>
                            <div style={{width: `40px`, paddingTop: `15px`}}>
                                <img src={appLogo} alt="appLogo" style={{width: `100%`}}/>
                            </div>
                            <p style={{lineHeight: `40px`}}>Booze Search</p>
                        </NavLink>
                    </Typography>

                    <Box display={{ xs: 'none', md: 'block' }}>
                        <NavLink
                            exact
                            to='/cocktails/ByName'
                            style={{textDecoration: `none`, color: `#fff`, paddingBottom: `10px`}}
                            activeStyle={{borderBottom: `2px solid #00e676`, color: `#00e676`}}
                        >
                            <Button color="inherit">
                                <LocalBarIcon/>
                                Search by cocktails
                            </Button>
                        </NavLink>
                        <NavLink
                            exact
                            to='/cocktails/ByIngredient'
                            style={{textDecoration: `none`, color: `#fff`, paddingBottom: `10px`}}
                            activeStyle={{borderBottom: `2px solid #00e676`, color: `#00e676`}}
                        >
                            <Button color="inherit">
                                <LocalDrinkIcon/>
                                Search by ingredients
                            </Button>
                        </NavLink>
                    </Box>

                </Toolbar>
            </AppBar>

            <MenuDrawer open = {open}
                        setOpen = {setOpen}/>

        </Box>
    )
}

export default AppHeader

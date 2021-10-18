import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {NavLink} from "react-router-dom";
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

const MenuDrawer = ({open, setOpen}) => {
    return (
        <div>

            <Drawer
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
            >
                <Box
                    sx={{width: 250}}
                    role="presentation"

                >
                    <List>
                        <ListItem>
                            <ListItemText primary={`Menu`}/>
                        </ListItem>
                        <Divider></Divider>

                        <NavLink
                            exact
                            to='/cocktails/ByName'
                            style={{textDecoration: `none`, color: `#333`}}
                            activeStyle={{color: `#00e676`}}
                        >
                            <ListItem button onClick={ () => {setOpen(false)} }>
                                <LocalBarIcon/>
                                <ListItemText primary={`Search by cocktails`}/>
                            </ListItem>
                        </NavLink>

                        <NavLink
                            exact
                            to='/cocktails/ByIngredient'
                            style={{textDecoration: `none`, color: `#333`}}
                            activeStyle={{color: `#00e676`}}
                        >
                            <ListItem button onClick={ () => {setOpen(false)} }>
                                <LocalDrinkIcon/>
                                <ListItemText primary={`Search by ingredients`}/>
                            </ListItem>
                        </NavLink>


                    </List>
                </Box>
            </Drawer>

        </div>
    )
}

export default MenuDrawer

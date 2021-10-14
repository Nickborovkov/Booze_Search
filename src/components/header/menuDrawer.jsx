import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {NavLink} from "react-router-dom";

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

                        <NavLink to='/cocktails' style={{textDecoration: `none`, color: `#333`}}>
                            <ListItem sx={{textDecoration: `none`}} button onClick={ () => {setOpen(false)} }>
                                <ListItemText primary={`Search by coctails`}/>
                            </ListItem>
                        </NavLink>

                        <NavLink to='/ingredients' style={{textDecoration: `none`, color: `#333`}}>
                            <ListItem button onClick={ () => {setOpen(false)} }>
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

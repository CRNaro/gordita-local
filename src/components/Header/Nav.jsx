import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import '../../styles/Nav.css'

function Nav() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = ['Home', 'Menu', 'About', 'Calendar', 'Contact', 'Friends', 'History', 'Portfolio']; //add a menu


    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start' color='inherit' onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor='right' open={drawerOpen} onClose={handleDrawerToggle}>
                <List>
                    {menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
 
    );
}

export default Nav
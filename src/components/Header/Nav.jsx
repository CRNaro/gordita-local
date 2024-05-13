import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import '../../styles/Nav.css'

const useStyles = makeStyles({
    drawer: {
        width: 200,
        height: '100%',
        backgroundColor: 'rgba(241, 136, 5)',
        anchor: 'right'
    }

});

function Nav() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = ['Home', 'Menu', 'About', 'Calendar', 'Contact', 'Friends', 'History', 'In the News']; //add a menu


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
                <List className={classes.drawer}>
                    {menuItems.map((text, index) => (
                        <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
                            <ListItemText primary={text} />
                        </ListItem>
                        
                    ))}
                </List>
            </Drawer>
        </div>
 
    );
}

export default Nav
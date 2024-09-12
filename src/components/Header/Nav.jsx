import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "../../styles/Nav.css";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    height: "100%",
    backgroundColor: "rgba(241, 136, 5)",
    anchor: "right",
  },
  menuButton: {
    backgroundColor: 'rgba(32, 44, 89, 0.7)',
    color: "#F18805",
  },

}));

function Nav() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    "Home",
    "Menu",
    "Contact",
    "About",
    "Calendar",
    "Friends",
    "History",
    "News",
  ]; //add a menu

  return (
    <div>
      <AppBar position="static" className={classes.menuButton}>
        <Toolbar >
          <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}  >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List className={classes.drawer}>
          {menuItems.map((text, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={`/${text.toLowerCase()}`}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default Nav;

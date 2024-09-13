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
import navTaco from "../../assets/images/taconav100.png";

const useStyles = makeStyles((theme) => ({
  drawer: {
    zIndex: 1200,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    height: "100%",
    backgroundColor: "rgba(241, 136, 5)",
    anchor: "right",
  },
  menuButton: {
   
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
      
        <Toolbar >
          <IconButton edge="start" onClick={handleDrawerToggle} style={{ color: '#F18805'}} >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      
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

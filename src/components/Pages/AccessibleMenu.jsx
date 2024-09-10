import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuNoPrice from "../../assets/images/menu-no-price.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: 'center',
    alignItems: "center",
    minHeight: "100vh",
  },
  menu: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    padding: 20,
    backgroundColor: "rgba(251, 255, 244, 0.7)",
    border: "3px solid rgba(241, 136, 5)",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
  },
  header: {
    fontFamily: "'A Day Without Sun', cursive",
    fontSize: "5rem",
    textAlign: "center",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
  },
  menuItems: {
    "& div": {
      display: "block",
    },
    justifyContent: "space-around",
    padding: "1rem",
  },
  menuMedia: {
    height: "100%",
    width: "100%",
    margin: "auto",
    borderRadius: "3px",
    border: "1px solid #F18805",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
  },
}));

function Menu() {
  const classes = useStyles();
  return (
    <Grid>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.header}
      >
        Our Menu
      </Typography>

      <div className={classes.root}>
        <Card className={classes.menu}>
          {/* <CardMedia
            className={classes.menuMedia}
            image={MenuNoPrice}
            component="img"
          ></CardMedia> */}
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.menuItems}
            >
              Original Birria Taco
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.menuItems}
            >
              Queso Birria
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.menuItems}
            >
              3 Original Birria Tacos
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.menuItems}
            >
              3 Queso Birria Tacos
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.menuItems}
            >
              Barria Ramen
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.menuItems}
            ></Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.menuItems}
            ></Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.menuItems}
            ></Typography>
          </CardContent>
          <Button size="small" color="primary">
            Download PDF of Menu
          </Button>
          <br />
          <Button size="small" color="primary">
            Share with Friends!
          </Button>
        </Card>
      </div>
    </Grid>
  );
}

export default Menu;
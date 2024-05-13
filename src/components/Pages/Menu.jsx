import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Nav from "../Header/Nav";

const useStyles = makeStyles ({
    menu: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        padding: 20,
        backgroundColor: 'rgba(251, 255, 244, 0.7)',
        border: '3px solid rgba(241, 136, 5)',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
    },
});

function Menu() {
    const classes = useStyles();
  return ( 
   <div>
  <Card className={classes.menu}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Menu Card
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Description of the Menu
      </Typography>
    </CardContent>
    <Button size="small" color="primary">
      Share
    </Button>
  </Card>
  </div>
  );
}

export default Menu;
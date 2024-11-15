import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import retroBar from '../../assets/images/retrobar.jpeg'
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles(({
  root:{
    position: 'relative',
    display: "flex",
    flexDirection: "column",
    // justifyContent: 'center',
    // alignItems: "center",
    minHeight: "100vh",
  },
  media: {
    position: 'absolute',
    justifyContent: 'center',
    height: '25%',
    width: '100%',
    // marginRight: '1%',
    borderRadius:'3px',
    border: '1px solid #F18805',
    boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    '@media (max-width: 600px) and (max-width: 900px)': {
        // top: '5%',
        height: '100vh',
        width: '125vh',
    },
},
  friendsTitleCard:{
    display: "flex",
    flexDirection: "column",
    backgroundColor: 'transparent',
    // margin: 'auto',
    border: 'none',
    boxShadow: 'none',
  },
  titleText: {
    fontSize: '50px',
    width: '30%',
    boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
  },

}))

function Friends() {
  const classes = useStyles();

  return (
  <Grid container className={classes.root}>
    <Grid>
    <CardMedia
                className={classes.media}
                image={retroBar}
                title="bar scene"
            >
    <Card className={classes.friendsTitleCard}>
      
      <CardContent>
    
        <Typography className={classes.titleText}>
   
     OUR FRIENDS
    
    </Typography>
  
    </CardContent>
    </Card>
    </CardMedia>
    </Grid>
    <Card className={classes.friendsList}>
      <CardContent> 
      <Typography>
    
      Friends
    
    </Typography>
      </CardContent>
    </Card>
  </Grid>



  );
}   

export default Friends;
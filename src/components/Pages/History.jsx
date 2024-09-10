import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles ({
    history: {
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
    header: {
      fontFamily: "'A Day Without Sun', cursive",
      fontSize: '5rem',
      textAlign: 'center',
      textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
    },
    menuItems: {
      '& div': {
        display: 'block',
      },
      justifyContent: 'space-around',
      padding: '1rem',
    },
});


function History() {
    const classes = useStyles();
    return (
        <div>
        <Card className={classes.history}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                   History of birria tacos
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    We have been serving the community since 1980. We are a family-owned business that has been passed down through three generations. We are proud to serve our community and look forward to continuing to serve you for many years to come.
                </Typography>
            </CardContent>

        </Card>
        </div>
    );
    }

    export default History; 
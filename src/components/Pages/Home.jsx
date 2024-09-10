import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import feastImg from '../../assets/images/barria-feast1.jpeg'
import { useNavigate } from 'react-router-dom';

/* Color Palette:
    black: #111313
    darkBlue: #202C59 
    darkRed: #942828
    darkOrange: #F18805
    lightOrange: #F0A202
    */ 

const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '100%',
        height: '100vh',
    },
    media: {
        height: '100%',
        width: '95%',
        margin: 'auto',
        borderRadius:'3px',
        border: '1px solid #F18805',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
    },
    card: {
        position: 'absolute',
        top: '50%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        height: 'auto',
        padding: 20,
        backgroundColor: 'rgba(251, 255, 244, 0.7)',
        border: '3px solid #F18805',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
        transition: 'opacity 2s ease-in-out',
        opacity: props => props.opacity ? 1 : 0,
    },
    customBlack: {
        color: '#111313',
    },
    customDarkBlue: {
        color: '#202C59',
    },
    customDarkRed: {
        color: '#942828',
    },
    customDarkOrange: {
        color: '#F18805',
    },
    customLightOrange: {
        color: '#F0A202',
    },
});

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const classes = useStyles({ opacity: isVisible });
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10);
        return () => clearTimeout(timer);
    }, []);


    const goToMenu = () => {
        navigate('/menu');
    }

    return (
        <Grid container className={classes.root}>
            <CardMedia
                className={classes.media}
                image={feastImg}
                title="Barria Taco Feast"
            />
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom className={classes.customDarkRed} variant="h5" component="h2">
                        We Are So Happy You're Here!
                    </Typography>
                    <Typography variant="body2" className={classes.customDarkBlue} component="p">
                        We are a family owned and operated business that 
                        is proud to serve the best birria tacos in NEW ENGLAND! 
                        We are so happy you're here and we can't wait to 
                        serve you!
                    </Typography>
                </CardContent>
                <Button size="small" color="primary" onClick={goToMenu}>
                    View Our Menu
                </Button>
                <br />
                <Button size="small" color="primary">
                    Contact Us
                </Button>
                <br />
                <Button size="small" color="primary">
                   Visit Our Instagram!
                </Button>
                <br />
                <Button size="small" color="primary">
                    Share Us With Friends!
                </Button>
                <br />
                <Button size="small" color="primary">
                    Share Us With Friends!
                </Button>
                <br />
            </Card>
        </Grid>
    );
}









// const useStyles = makeStyles({
//     card: {
//         margin: 20,
       
//     },
//     media: {
//         height: 500,
//         boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
//     },
//     textbox: {
//         padding: 20,
//         border: '3px solid rgba(241, 136, 5)',
//         boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
//     }
// });

// export default function Home() {
//     const classes = useStyles();

//     return(
//         <Grid container>
//             <Grid item xs={12} md={6}>
//         <Card className={classes.card}>
//             <CardMedia
//                     className={classes.media}
//                     image={feastImg}
//                     title="Title of the Image"
//                 />
//                 </Card>
//             </Grid>
//             <Grid item xs={12} md={6}>
//             <Card className={classes.textbox}>
//                 <CardContent >
//                     <Typography gutterBottom variant="h5" component="h2">
//                         Welcome Card
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Description of the Card
//                     </Typography>
//                 </CardContent>
//             <Button size="small" color="primary">
//                 Share
//             </Button>
//             <Button size="small" color="primary">
//                 Learn More
//             </Button>
//             </Card>
//             </Grid>
//             </Grid>
//     )
// }
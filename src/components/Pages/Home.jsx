
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import feastImg from '../../assets/images/barria-feast1.jpeg'


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
        border: '1px solid #D95D39',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
    },
    card: {
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

export default function Home() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <CardMedia
                className={classes.media}
                image={feastImg}
                title="Barria Taco Feast"
            />
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Welcome Card
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Description of the Card
                    </Typography>
                </CardContent>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
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
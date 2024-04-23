
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
    card: {
        
    },
    media: {
        height: 600,
    },
});

export default function Home() {
    const classes = useStyles();

    return(
        <Grid container>
            <Grid item xs={12} md={6}>
        <Card>
            <CardMedia
                    className={classes.media}
                    image={feastImg}
                    title="Title of the Image"
                />
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Title of the Card
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
            </Grid>
    )
}
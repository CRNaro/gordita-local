import '../../styles/Footer.css';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
        color: 'white',
        fontSize: '1.5rem',
        padding: '1rem',
        textAlign: 'center',
    },
    footerTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    }
});



function Footer() {
    const classes = useStyles();
    return (
        <footer>
            <CardMedia 
            className={classes.footer}
           
            title="Birria Gordita Tacos">
                    <div>
            <h1 className={classes.footerTitle}>links to builder sites and repos</h1>
            </div>
            </CardMedia>
        
          
        </footer>
    )
}

export default Footer
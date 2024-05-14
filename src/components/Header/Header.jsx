
import Nav from './Nav.jsx';
import '../../styles/Header.css';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../../assets/images/bgtlogo.jpg';

const useStyles = makeStyles({
    header: {
        backgroundColor: '#202C59',
        color: '#F0A202',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        alignItems: 'center'  
    },
    title: {
        fontFamily: "'A Day Without Sun', cursive",
        fontSize: '3.5rem',
        marginRight: '40rem',
        letterSpacing: '0.2rem',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)'
    },
    logo: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
        border: '1px solid #D95D39',
        marginLeft: '1rem'
    }
});

function Header() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <CardMedia 
            className={classes.logo} 
            image={logo}
            title="Birria Gordita Tacos">
            </CardMedia>
            <div>
            <h1 className={classes.title}>.birria gordita tacos</h1>
            </div>
            <Nav/>
        </header>
    )
}

export default Header

import Nav from './Nav.jsx';
import '../../styles/Header.css';
import { makeStyles } from '@material-ui/core/styles';

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
        marginLeft: '3rem',
        letterSpacing: '0.2rem',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)'
    }
});

function Header() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <div>
            <h1 className={classes.title}>barria gordita lady</h1>
            </div>
            <Nav/>
        </header>
    )
}

export default Header
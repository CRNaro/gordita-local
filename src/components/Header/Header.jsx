
import Nav from './Nav.jsx';
import '../../styles/Header.css';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../../assets/images/bgtlogo.jpg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import '../../index.css';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        display:'flex',
        alignItems: 'center',
    },
    header: {
        backgroundColor: 'rgba(32, 44, 89, 0.9)',
        color: '#F18805',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        alignItems: 'center'  
    },
    title: {
        fontFamily: "'ADayWithoutSunCustomFont', sans-serif",
        color: '#F18805',
        fontSize: '4rem',
        letterSpacing: '0.5rem',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: 'transparent',
            },
        border: 'none',
    },
    logo: {
        width: '50px', 
        height: '50px', 
        [theme.breakpoints.up('sm')]: {
          width: '100px',
          height: '100px',
        },
        borderRadius: '50%',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
        border: '1px solid #D95D39',
        marginLeft: '1rem',
    }
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
};


function Header() {
    const classes = useStyles();
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };
    return (
        <HideOnScroll>
        <header className={classes.header}>
            
            <div className={classes.titleContainer}>
            <Button variant="h1" className={classes.title} onClick={goToHome}>.Birria Gordita Tacos.</Button>
            {/* <CardMedia title="Birria Gordita Tacos" className={classes.logo} image={logo}></CardMedia> */}
           
            </div>  
           
            
            {/* <Nav/> */}
        </header>
        </HideOnScroll>
    )
}

export default Header
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home';
import About from './components/Pages/About'
import Menu from './components/Pages/Menu'
import AccessibleMenu from './components/Pages/AccessibleMenu'
import PopupMenu from './components/Pages/PopupMenu'
import FestivalMenu from './components/Pages/FestivalMenu'
import Calendar from './components/Pages/Calendar'
import Contact from './components/Pages/Contact'
import Friends from './components/Pages/Friends'
import History from './components/Pages/History'
import News from './components/Pages/News'
import Nav from './components/Header/Nav.jsx';
import { ArrowLeft } from '@material-ui/icons'


const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#202C59'
    },
    secondary: {
      main: '#202C59'
    },
    background: {
      default: '#202C59'
  }
}
});
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    paddingTop: '10rem',
  },
header: {
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
},
nav: {
  position: 'fixed',
  right: 15,
  top: '1rem',
  backgroundColor: 'transparent',
  zIndex: 1100,
  '@media (max-width: 600px) and (max-width: 900px)': {

  },
},
footer: {
  position: 'auto',
  paddingTop: '40rem',
},
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
      <Router>
      <div className={classes.nav}>
          <Nav/>
          </div>
    
        <div className={classes.header}>
        <Header />
        
        </div>
        <div className={classes.content}>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/accessiblemenu' element={<AccessibleMenu />} />
          <Route path='/popupmenu' element={<PopupMenu />} />
          <Route path='/festivalmenu' element={<FestivalMenu />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/history' element={<History />} />
          <Route path='/news' element={<News />} />
        </Routes>
        </div>
        </Router>
        <div className={classes.footer}>
        <Footer />  
        </div>
     </div>
      </ThemeProvider>
       
  )
}

export default App

// This is if I want to make the site scrollable?
  // <ThemeProvider theme={theme}>
  //     <CssBaseline />
  //     <Header />
  //     <Home />
  //     <About />
  //     {/* Add other components here */}
  //     {/* <Menu /> */}
  //     {/* <Calendar /> */}
  //     {/* <Contact /> */}
  //     {/* <Friends /> */}
  //     {/* <History /> */}
  //     {/* <Portfolio /> */}
  //     {/* <Footer /> */}
  //     </ThemeProvider>
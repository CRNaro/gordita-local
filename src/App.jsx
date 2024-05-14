import { useState } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
//import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home';
import About from './components/Pages/About'
import Menu from './components/Pages/Menu'
import Calendar from './components/Pages/Calendar'
import Contact from './components/Pages/Contact'
import Friends from './components/Pages/Friends'
import History from './components/Pages/History'
import News from './components/Pages/News'


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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path='*' element={<Home />} />
        
        <Route path='/about' element={<About />} />
        
        <Route path='/menu' element={<Menu />} />
        
        <Route path='/calendar' element={<Calendar />} />

        <Route path='/contact' element={<Contact />} />
        
        <Route path='/friends' element={<Friends />} />
     
        <Route path='/history' element={<History />} />
           
        <Route path='/news' element={<News />} />
           {/*
        <Footer />  */}
        </Routes>
        </Router>
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
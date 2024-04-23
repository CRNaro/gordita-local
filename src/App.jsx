import { useState } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
//import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home'

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
          <Route path='/' element={<Home />} />
        {/*<Route path='/about' component={About} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/contact' component={Contact} />
        <Route path='/friends' component={Friends} />
        <Route path='/history' component={History} />
        <Route path='/portfolio' component={Portfolio} />
        <Footer />  */}
        </Routes>
        </Router>
      </ThemeProvider>
  )
}

export default App

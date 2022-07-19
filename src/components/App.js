import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles } from './styled/Global.style.js';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Navigation from './Navigation'
import Calendar from './Calendar.js';
// import { Route } from '@mui/icons-material'; - This was conflicting with Routes
import SignIn from './SignIn';
import SignUp from './SignUp';
import NotFound from './NotFound';

const App = () => {
  const [theme, setTheme] = useState('light')

  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const iconToggle = () => {
    if(theme === 'light'){
      return <NightlightIcon fontSize="large"/>
    }else {
      return <LightModeIcon fontSize="large"/>
    }
  }
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navigation toggle={themeToggle} icon={iconToggle}/>
        <h1>hello there.... ʘ‿ʘ</h1>
        <Calendar/>
        <h4>Website is still under construction 🛠</h4>
      </ThemeProvider>

      

      <Router>
        <Routes>
        <Route path="SignIn" element={<SignIn/>} />
        <Route path="SignUp" element={<SignUp/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
  }
export default App

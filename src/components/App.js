import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles } from './styled/Global.style.js';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Navigation from './Navigation'
import Calendar from './Calendar.js';
// import { Route } from '@mui/icons-material'; - This was conflicting with Routes
import NotFound from './NotFound';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AddShow from './AddShow';
import About from './About';
import Hero from './Hero';
import Watchlist from './Watchlist';
// import AddReview from './AddReview';
// import EditUsers from './EditUsers';
import Footer from './Footer';
// import Profile from './Profile';
// import Top10 from './Top10';
import Shows from './Show';
// import { CircularProgress } from '@mui/material';


const App = () => {
  // Loading animation
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log("user is now " + username)
  //   sessionStorage.setItem('username', username)
  // })


  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 800);
  // }, []);
  // Dark mode toggle
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

      <Router>
          <>
            <Navigation toggle={themeToggle} icon={iconToggle} username={sessionStorage.getItem('username')}/>
            <Routes>
      {/* Route multiple compponents to the same path */}

              <Route path='/' element={<><Hero /> <Shows /><Calendar /></>} />
              <Route path='/' element={<><Hero /><Calendar /></>} />
              <Route path="*" element={<NotFound/>} />
              <Route path="signin" element={<SignIn/>} />
              <Route path="signup" element={<SignUp/>} />
              <Route path="AddShow" element={<AddShow/>} />
              <Route path="about" element={<About/>} />
              <Route path="Watchlist" element={<Watchlist/>} />
              <Route path ="Show" element={<Shows/>} />
              {/* <Route path="AddReview" element={<AddReview/>} /> */}
              {/* <Route path="EditUsers" element={<EditUsers/>} /> */}
              {/* <Route path="Profile" element={<Profile/>} /> */}

            </Routes>
            <Footer />
          </>
      </Router>
      </ThemeProvider>
    </>
  )
  }
export default App
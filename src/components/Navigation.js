import React, { useState, useEffect } from 'react';
import NavDrawer from './Drawer.js';
import logo from '../images/nav-logo.png'
import { AppBar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Navigation = ({toggle, icon, loading, username}) => { 


    const themeIcon = icon

    const toggler = () => {
    toggle();}
    const [isDesktop, setDesktop] = useState(window.innerWidth > 999);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 999);
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return() => window.removeEventListener('resize', updateMedia);
    });

    return(
        <AppBar position="static" className="nav">
            {/* <div className="navContainer"> */}
                <img className="navLogo" src={logo} alt="logo"></img>
                {isDesktop ? (
                    <>
                        <div className="navList">
                            <Typography variant="text" component={Link} to="/" onClick={loading=true}>Home</Typography>
                            {/* <Typography variant="text" component={Link} to="/about" onClick={loading=true}>About</Typography> */}
                            
                            
                            <Typography variant="text" component={Link} to="/watchlist" onClick={loading=true}>Watchlist</Typography> 
                            <Typography variant="text" component={Link} to="/signup" onClick={loading=true}>Sign Up</Typography>
                            <Typography variant="text" component={Link} to="/signin" onClick={loading=true}>Sign In</Typography>
                            <Typography variant="text">{username}</Typography>




                            <div className="themeToggle" onClick={toggler}>
                                {themeIcon()}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <NavDrawer toggle={toggle} icon={icon} />
                    </>

                )}
            {/* </div> */}
        </AppBar>
    );
}

export default Navigation;
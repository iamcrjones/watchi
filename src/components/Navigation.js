import React, { useState, useEffect } from 'react';
import NavDrawer from './Drawer.js';
import logo from '../images/nav-logo.png'
import { AppBar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = ({toggle, icon}) => {


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
        <AppBar position="static">
            {/* <div className="navContainer"> */}
                <img className="navLogo" src={logo} alt="logo"></img>
                {isDesktop ? (
                    <>
                        <div className="navList">
                            <Typography variant="text" component={Link} to="/">Home</Typography>
                            <Typography variant="text" component={Link} to="About">About</Typography>
                            <Typography variant="text" component={Link} to="">Watchlist</Typography>
                            <Typography variant="text" component={Link} to="SignUp">Sign Up</Typography>
                            <Typography variant="text" component={Link} to="SignIn">Sign In</Typography>



                            {/* <a href="/" alt="link for home">Home</a> */}
                            {/* <a href="/About" alt="link for home">About</a> */}
                            {/* <a href="/" alt="link for home">My Watchlist</a> */}
                            {/* <a href="/SignUp" alt="link for home">Sign Up</a> */}
                            {/* <a href="/SignIn" alt="link for home">Login</a> */}
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
import React, { useState, useEffect } from 'react';
import NavDrawer from './Drawer.js';
import logo from '../images/nav-logo.png'
import { AppBar } from '@mui/material';

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
                            <a href="/" alt="link for home">Home</a>
                            <a href="/" alt="link for home">About</a>
                            <a href="/" alt="link for home">My Watchlist</a>
                            <a href="/" alt="link for home">Sign Up</a>
                            <a href="/" alt="link for home">Login</a>
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
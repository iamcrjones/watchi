import React, { useState, useEffect } from 'react';
import NavDrawer from './Drawer.js';
import logo from '../images/nav-logo.png'

const Navigation = ({toggle, icon}) => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 820);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 820);
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return() => window.removeEventListener('resize', updateMedia);
    });

    return(
        <>
            {isDesktop ? (
                <nav className="nav">
                    <img className="navLogo" src={logo} alt="logo"></img>
                    <p>desktop mode!😎</p>
                </nav>
            ) : (
                <nav className="nav">
                    <img className="navLogo" src={logo} alt="logo"></img>
                    <NavDrawer toggle={toggle} icon={icon} />
                </nav>
            )}
        </>
    );
}

export default Navigation;
import React, { useState, useEffect } from "react";
import NavDrawer from "./Drawer.js";
import logo from "../images/nav-logo.png";
import { AppBar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = ({ toggle, icon, username }) => {
  const themeIcon = icon;

  // Function to toggle theme colors
  const toggler = () => {
    toggle();
  };

  // State values to determine if the device is desktop width
  const [isDesktop, setDesktop] = useState(window.innerWidth > 999);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 999);
  };

  // Updates state and rerenders navbar when the device width changes
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  //Clears all session storage items which logs a user out as there is no longer a jwt stored for requests
  function logout() {
    sessionStorage.clear();
    window.location.href = "/";
  }

  return (
    <AppBar position="static" className="nav">
      <div className="logoDiv">
        <img className="navLogo" src={logo} alt="logo"></img>
      </div>
      {/* Determines which navbar to display depending on device width. If mobile is will display drawer instead of traditional navbar */}
      {isDesktop ? (
        <>
          <div className="navList">
            <Typography variant="text" component={Link} to="/">
              Home
            </Typography>
            <Typography variant="text" component={Link} to="/watchlist">
              Watchlist
            </Typography>
            {/* Conditional rendering for if a user is logged in. */}
            {!sessionStorage.getItem("username") ? (
              <>
                <Typography variant="text" component={Link} to="/signup">
                  Sign Up
                </Typography>
                <Typography variant="text" component={Link} to="/signin">
                  Sign In
                </Typography>
              </>
            ) : (
              <Typography
                variant="text"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Typography>
            )}
            {/* Only displays the link to add a show if the user is an admmin */}
            {sessionStorage.getItem("admin") === "true" && (
              <Typography variant="text" component={Link} to="/addshow">
                addshow
              </Typography>
            )}
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
    </AppBar>
  );
};

export default Navigation;

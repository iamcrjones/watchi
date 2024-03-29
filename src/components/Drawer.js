import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function NavDrawer({ toggle, icon }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const themeIcon = icon;

  //Function to toggle theme colors and icon when theme icon is clicked.
  const toggler = () => {
    toggle();
  };

  // Allows the drawer to open and close
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //Clears all session storage items which logs a user out as there is no longer a jwt stored for requests
  function logout() {
    sessionStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <div className="menu">
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuIcon
              className="menuButton"
              onClick={toggleDrawer(anchor, true)}
              variant="contained"
            ></MenuIcon>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <Box
                sx={{
                  width: anchor === "top" || anchor === "bottom" ? "auto" : 150,
                }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
              >
                <div className="themeToggle" onClick={toggler}>
                  {themeIcon()}
                </div>
                <Divider />
                <div className="mobileNavDiv">
                  <Typography
                    variant="text"
                    className="mobileMenu"
                    component={Link}
                    to="/"
                  >
                    Home
                  </Typography>
                  <Divider />
                  <Typography
                    variant="text"
                    className="mobileMenu"
                    component={Link}
                    to="/watchlist"
                  >
                    Watchlist
                  </Typography>
                  <Divider />

                  {!sessionStorage.getItem("username") ? (
                    <>
                      <Typography
                        variant="text"
                        className="mobileMenu"
                        component={Link}
                        to="/signup"
                      >
                        Sign Up
                      </Typography>
                      <Divider />
                      <Typography
                        variant="text"
                        className="mobileMenu"
                        component={Link}
                        to="/signin"
                      >
                        Sign In
                      </Typography>
                    </>
                  ) : (
                    <Typography
                      variant="text"
                      className="mobileMenu"
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </Typography>
                  )}
                  <Divider />
                  {sessionStorage.getItem("admin") === "true" && (
                    <Typography
                      variant="text"
                      className="mobileMenu"
                      component={Link}
                      to="/addshow"
                    >
                      Add Show
                    </Typography>
                  )}
                </div>
              </Box>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

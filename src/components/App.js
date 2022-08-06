import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styled/Global.style.js";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Calendar from "./Calendar.js";
import NotFound from "./NotFound";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AddShow from "./AddShow";
import Hero from "./Hero";
import Watchlist from "./Watchlist";
import Footer from "./Footer";
import Shows from "./Shows";
import IndividualShow from "./IndividualShow";

const App = () => {
  // Function in order to pass a show ID from child to parent in order to add the selected show ID to session storage.
  const [ID, setID] = useState(null);
  const sendID = (showId) => {
    setID(showId);
  };

  // Dark mode toggle

  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  // Icon for theme toggle changes according to the theme
  const iconToggle = () => {
    if (theme === "light") {
      return <NightlightIcon fontSize="large" />;
    } else {
      return <LightModeIcon fontSize="large" />;
    }
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />

        <Router>
          <>
            <Navigation
              toggle={themeToggle}
              icon={iconToggle}
              username={sessionStorage.getItem("username")}
            />
            <Routes>
              {/* Route multiple compponents to the same path */}

              <Route
                path="/"
                element={
                  <>
                    <Hero /> <Shows sendID={sendID} />
                    <Calendar />
                  </>
                }
              />
              <Route path="*" element={<NotFound />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="AddShow" element={<AddShow />} />
              <Route path="Watchlist" element={<Watchlist />} />
              <Route
                path="/show/:showId"
                element={<IndividualShow id={ID} />}
              />
            </Routes>
            <Footer />
          </>
        </Router>
      </ThemeProvider>
    </>
  );
};
export default App;

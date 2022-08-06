import * as React from "react";
import starthero from "../images/Hero-image.png";
import Grid from "@mui/material/Grid";

const Hero = () => {
  return (
    <>
      <Grid container className="aboutContainer" spacing={2}>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <img
            className="aboutPic"
            src={starthero}
            alt="lots of different Anime characters merged in one"
          ></img>
        </Grid>
        <Grid className="aboutText" item xs={12} md={3} xl={3}>
          <h1>Because we know we have to Watch them all!</h1>
          <p>
            When you want to see the best, like no one ever has, to watch them
            all is your real test, to schedule them is your cause. Travel though
            this page, search though them all, and teach them to understand the
            power that's inside -'Watchi-mon'.
          </p>
        </Grid>
      </Grid>
    </>
  );
};
export default Hero;

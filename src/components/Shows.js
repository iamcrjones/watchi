import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { getShows } from "./services/showServices.js";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import RemoveShow from "./RemoveShow.js";
import Button from "@mui/material/Button";
import AddToWatchlist from "./AddToWatchlist.js";

const initialData = [];

const Shows = ({ sendID }) => {
  const [shows, setShows] = useState(initialData);

  useEffect(() => {
    // Pulls all shows to display as cards on the homepage
    getShows()
      .then((data) => {
        const showList = Array.from(data);
        // Sets the array to the state for shows
        setShows(showList);
        return data;
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Grid container className="top10">
        {/* Creates a card displaying different attributes for each show present in the state */}
        {shows.map((show) => (
          <Card className="shows" key={show.attributes.id}>
            <Grid container className="card">
              <Grid item xs={12} md={12}>
                <img
                  src={show.attributes.picture_url}
                  alt={show.attributes.title}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography
                  variant="h5"
                  className="showCardTitle"
                    // Sets the id of the clicked show title in session storage in order to pull data for the individual show page
                    // and then redirects to said individual show page
                  onClick={() => {
                    sessionStorage.setItem("currentShow", show.attributes.id);
                    window.location.href = `/show/${show.attributes.id}`;
                  }}
                >
                  {show.attributes.title}
                </Typography>
              </Grid>

              <Grid item className="releaseDays" xs={12} md={12}>
                <p>Release days: </p>
                {show.attributes.picture.record.monday ? (
                  <Typography variant="p">Monday </Typography>
                ) : null}
                {show.attributes.picture.record.tuesday ? (
                  <Typography variant="p">Tuesday </Typography>
                ) : null}
                {show.attributes.picture.record.wednesday ? (
                  <Typography variant="p">Wednesday </Typography>
                ) : null}
                {show.attributes.picture.record.thursday ? (
                  <Typography variant="p">Thursday </Typography>
                ) : null}
                {show.attributes.picture.record.friday ? (
                  <Typography variant="p">Friday </Typography>
                ) : null}
                {show.attributes.picture.record.saturday ? (
                  <Typography variant="p">Saturday </Typography>
                ) : null}
                {show.attributes.picture.record.sunday ? (
                  <Typography variant="p">Sunday </Typography>
                ) : null}
              </Grid>

              <Grid item className="dates" xs={12} md={12}>
                <Typography variant="p">
                  Start Date: {show.attributes.airdate}
                </Typography>
              </Grid>

              <Grid item className="dates" xs={12} md={12}>
                <Typography variant="p">
                  End Date: {show.attributes.enddate}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Button
                  className="buttons"
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                    {/* Allows a signed in user to add a show to their watchlist from the card by passing the id of that mapped show */}
                  {<AddToWatchlist show={show.attributes.id} />}
                </Button>
              </Grid>
              {/* Only displays if the user is a signed in admin. */}
              <RemoveShow id={show.id} />
            </Grid>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Shows;

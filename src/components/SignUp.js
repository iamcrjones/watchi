import * as React from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import pikachu from "../images/Pikachu-dance.gif";
import { signUp, signIn } from "./services/authServices";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createWatchlist } from "./services/watchlistServices";
import { getWatchList } from "./services/watchlistServices";

const SignUp = () => {
  const initialFormData = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  // Initial state values set.
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  // Handles the submission of a user attempting to create an account
  const handleSubmit = (e) => {
    e.preventDefault();
    // Sends a post request with the data present in the form state to create user account
    signUp(formData)
      .then((user) => {
        let errorMessage = "whoops";
        if (user.error) {
          Object.keys(user.error).forEach((key) => {
            errorMessage = errorMessage.concat(
              "whoops",
              `${key} ${user.error[key]}`
            );
          });
          setError(errorMessage);
          alert(error);
        } else {
          // If no errors with the creating of the user in the database, a request is made to create the watchlist
          // that is associated with the freshly created account using the ID returned from the account creation.
          const userData = new FormData();
          userData.append("user_id", user.user_id);
          createWatchlist(userData)
            .then((watchList) => {
              if (watchList.error) {
                setError(watchList.error);
              } else {
                // If there is no errors with the creation of the watchlist, the user's data is then passed through to another post request to sign them in and return their jwt token to enable them to use the app as an authenticated user
                const data = new FormData();
                data.append("email", formData.email);
                data.append("password", formData.password);
                signIn(data)
                  .then((data) => {
                    if (data.error) {
                      setError(data.error);
                    } else {
                      sessionStorage.setItem("username", data.username);
                      sessionStorage.setItem("token", data.jwt);
                      sessionStorage.setItem("user_id", data.user_id);
                      // Upon a successful login, the app then retrieves the watchlist of the signed in user and is then redirected to the homepage
                      getWatchList()
                        .then((watchList) => {
                          sessionStorage.setItem("watch_list", watchList);
                        })
                        .catch((e) => {
                          setError(e);
                        });
                      window.location.href = "/";
                    }
                  })
                  .catch((e) => {
                    setError(e);
                  });
                  // Form data is reset
                setFormData(initialFormData);
              }
            })
            .catch((e) => {
              setError(e);
            });
        }
      })
      .catch((e) => {
        setError(e);
      });
  };
  // Updates the state of the form whenever changes are made
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <Container>
      <Grid container spacing={2} className="signUpForm">
        <Grid item xs={12} sm={6} md={6}>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <h1>Sign Up!</h1>

            <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="firstname"
              autoFocus
              onChange={handleFormData}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
              autoFocus
              onChange={handleFormData}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name (for others to see)"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleFormData}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleFormData}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleFormData}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password_confirmation"
              label="Confirm Password"
              type="password"
              id="password_confirmation"
              onChange={handleFormData}
            />

            <Grid
              container
              sx={{
                justifyContent: "space-between",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Button type="submit" fullWidth variant="contained">
                  Sign Up
                </Button>
              </Grid>

              <Grid item>
                <p> Already have an account?</p>{" "}
                <Typography variant="text" component={Link} to="/signin">
                  SignIn?
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} className="pikachu">
          <img className="signInPic" src={pikachu} alt="dancing Pikachu"></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;

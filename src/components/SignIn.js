import * as React from 'react';
import { Box } from '@mui/material';
import charizard from '../images/Charazard-Gif.gif';
import { useState } from "react";
import {signIn} from './services/authServices';
import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { getWatchList } from './services/watchlistServices';





const SignIn = () => {
    const initialFormData = {
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(null)



    const handleSubmit = (e) =>{
        e.preventDefault()

        signIn(formData)
        .then((user) => {
            console.log(user)
            if(user.error){
                setError(user.error)
            }else{
                setError(null)
                sessionStorage.setItem("username",  user.username)
                sessionStorage.setItem("token", user.jwt)
                sessionStorage.setItem('user_id', user.user_id)

                setFormData(initialFormData)
                getWatchList()
                .then((watchList) => {
                    sessionStorage.setItem('watch_list', watchList)
                })
                .catch((e) => {
                    setError(e)
                })
                window.location.href = '/';
            }

        })
        .catch(e=> {
            setError(e.response.data.error)
            console.log(e.response.data)})

    }

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }



    return(
        <Container maxWidth="l">
        {error && <h2>{error}</h2>}
        <Grid container spacing={2} sx={{ 
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            }}>
    
          <Grid item xs={12} sm={6} md={6} >
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>  
            <h1>Login</h1>
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
                    autoComplete="current-password"
                    onChange={handleFormData}
                  />
                  <Grid container  
                  sx={{ 
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    alignItems: 'center',
                    }}>
                  
    
                    <Grid item >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        > Sign In
                        </Button>
                        </Grid>
    
                        <Grid item>
                        <p> Dont have an account?</p> <Typography variant="text" component={Link} to="/signup">SignUp?</Typography>
                        </Grid>
                  </Grid>
            </Box>
            
        </Grid>
        <Grid item xs={12} sm={6} md={6} className="charizard">
        <img className="signUpPic" src={charizard} alt="dancing charizard"></img>
            
        </Grid>
        </Grid>
        </Container>
      );
    }

export default SignIn;
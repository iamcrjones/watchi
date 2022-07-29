import * as React from 'react';
import { Box } from '@mui/material';
import charizard from '../images/Charazard-Gif.gif'
import { useState } from "react"
import {signIn} from './services/authServices'
import { Button, TextField } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';





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
                setFormData(initialFormData)
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
        
    <Grid container spacing={2} sx={{ 
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        }}>

      <Grid item xs={6}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>  
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
              <Grid container spacing={2} justify="flex-end">

                <Grid item >
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    </Grid>

                    <Grid item >
                        <p> Dont have an account? SignUp! </p>
                    </Grid>
              </Grid>
        </Box>
        
    </Grid>
    <Grid item xs={6}>
    <img className="signUpPic" src={charizard} alt="dancing Pikachu"></img>
        
    </Grid>
    </Grid>
    </Container>
  );
}


export default SignIn;
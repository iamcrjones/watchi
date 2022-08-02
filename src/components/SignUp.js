import * as React from 'react';
import { Button, TextField, Typography, Box } from "@mui/material";
import pikachu from '../images/Pikachu-dance.gif';
import { signUp } from './services/authServices';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Alert from 'react-popup-alert'
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const SignUp = () => {

    const navigate = useNavigate()

        const initialFormData = {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password_confirmation: ""
        }



        const [formData, setFormData] = useState(initialFormData)
        const  setError = useState(null)
    
    
    
        const handleSubmit = (e) =>{
            e.preventDefault()
            signUp(formData)
            .then((user) => {
                let errorMessage = "whoops";
                console.log(user)
                navigate('/signin');
                // alert.success(user.message)

                if(user.error){
                    // console.log("if statement")
                    Object.keys(user.error).forEach(key => {
                        
                        errorMessage = errorMessage.concat("whoops", `${key} ${user.error[key]}`)
                    })
                    setError(errorMessage)
                    
                }
                else{
                    // console.log("else statement")
                    setError(null);
                    window.location.href = '/';
                    navigate('/');
                    

                }
    
            })
            .catch(e=> {
                setError(e.response.data.error)
                console.log(e.response.data)
                // need to set an error here
                 

            })
    
        }
    
        const handleFormData = (e) => {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value
                
            })
        }
return (


    <Container maxWidth="l">
            
    <Grid container spacing={2} sx={{ 
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        }}>

      <Grid item xs={6}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>  
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
                    >
                    Sign Up
                    </Button>
                    </Grid>

                    <Grid item>
                    <p> Already have an account?</p> <Typography variant="text" component={Link} to="/signin">SignUp?</Typography>
                    </Grid>
              </Grid>
        </Box>
        
    </Grid>
    <Grid item xs={6}>
    <img className="signInPic" src={pikachu} alt="dancing Pikachu"></img>
        
    </Grid>
    </Grid>
    </Container>
  );
}


export default SignUp;
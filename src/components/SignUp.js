import * as React from 'react';
import { Button, InputLabel, TextField, Typography } from "@mui/material";
import pikachu from '../images/Pikachu-dance.gif';
import { signUp } from './services/authServices';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Alert from 'react-popup-alert'

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
        const [error, setError] = useState(null)
    
    
    
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
    <>
        <Typography variant='h4'>Register user</Typography>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <div>
                <InputLabel>Username:</InputLabel>
                <TextField type="text" name="username" id="username" onChange={handleFormData}/>
            </div>
            <div>
                <InputLabel>Email:</InputLabel>
                <TextField type="text" name="email" id="email" onChange={handleFormData}/>
            </div>
          
            <div>
                <InputLabel>First Name:</InputLabel>
                <TextField type="text" name="firstName" id="firstName" onChange={handleFormData}/>
            </div>
            <div>
                <InputLabel>Last Name:</InputLabel>
                <TextField type="text" name="lastName" id="lastName" onChange={handleFormData}/>
            </div>

            <div>
                <InputLabel htmlFor="password">Password:</InputLabel>
                <TextField type="password" name="password" id="password" onChange={handleFormData}/>
            </div>

            <div>
                <InputLabel htmlFor="password">Password confirmation:</InputLabel>
                <TextField type="password" name="password_confirmation" id="password_confirmation"  onChange={handleFormData}/>
            </div>
           
            <Button variant="contained" type="submit">Sign up</Button>
        </form>
        <img className="signUpPic" src={pikachu} alt="dancing Pikachu"></img>
    </>
)

}


export default SignUp;
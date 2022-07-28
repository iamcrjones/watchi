import * as React from 'react';
import { Button, InputLabel, TextField, Typography } from "@mui/material";
import pikachu from '../images/Pikachu-dance.gif';
import { signUp } from './services/authServices';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext"




const SignUp = () => {

    const {dispatch} = useGlobalState()
    const navigate = useNavigate()

        const initialFormData = {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirm_password: ""
                
        }

const [formData, setFormData] = useState(initialFormData)
const [error, setError] = useState(null)

const handleSubmit = (e) =>{
    e.preventDefault()
    
    signUp(formData)
      .then((user) => {
        console.log(user)
        let errorMessage = "";
        if (user.error){
            Object.keys(user.error).forEach(key => {
                errorMessage = errorMessage.concat("", `${key} ${user.error[key]}`)
            })
            setError(errorMessage)
        }
        else {
            sessionStorage.setItem("username",  user.username)
            sessionStorage.setItem("token", user.jwt)
            dispatch({
                type: "setLoggedInUser",
                data: user.username
            })
            dispatch({
                type: "setToken",
                data: user.jwt
            })
            setFormData(initialFormData)
            navigate("/messages")
        }
        
    })
    .catch(e => {console.log(e)})
    
    
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
                <TextField type="text" name="username" id="username" value={formData.username} onChange={handleFormData}/>
            </div>
            <div>
                <InputLabel>Email:</InputLabel>
                <TextField type="text" name="email" id="email" value={formData.email} onChange={handleFormData}/>
            </div>
            <div>
                <InputLabel htmlFor="password">Password:</InputLabel>
                <TextField type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
            </div>
            <div>
                <InputLabel>First Name:</InputLabel>
                <TextField type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleFormData}/>
            </div>
            <div>
                <InputLabel>Last Name:</InputLabel>
                <TextField type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleFormData}/>
                </div>
            <div>
                <InputLabel htmlFor="password">Password confirmation:</InputLabel>
                <TextField type="password" name="confirm_password" id="confirm_password" value={formData.password_confirmation} onChange={handleFormData}/>
            </div>
           
            <Button variant="contained" type="submit">Sign up</Button>
        </form>
        <img className="signUpPic" src={pikachu} alt="dancing Pikachu"></img>
    </>
)

}


export default SignUp;
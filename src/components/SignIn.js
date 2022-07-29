import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import charizard from '../images/Charazard-Gif.gif'
import { useState } from "react"
import {signIn} from './services/authServices'
import TextField from '@mui/material/TextField';



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


    return (
        <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        
        >
            <Card>
                <CardContent>
                    <h1>Sign In</h1>
                    {error && <h3>{error}</h3>}
                    <TextField
                        required
                        id="outlined-email-input"
                        type="Email"
                        label="Email"
                        onChange={handleFormData}
                    />

                        <TextField
                        required
                        id="outlined-password-input"
                        type="password"
                        autoComplete="current-password"
                        label="Password"
                        onChange={handleFormData}
                    />

                        {/* <label>Password:</label>
                        <input type="text" name="password" id="password" onChange={handleFormData}/> */}
                        <button type="submit">Sign In</button>


                    <img className="signInPic" src={charizard} alt="dancing charizard"></img>
                </CardContent>
            </Card>
        </Box>
    );
}

export default SignIn;
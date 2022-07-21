import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import charizard from '../images/Charazard-Gif.gif'
import { useState } from "react"
import {signIn} from './services/authServices'



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
        .catch(e=> {console.log(e.response.data)})

    }

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }


    return (
        <Box>
            <Card>
                <CardContent>
                    {error && <p>{error}</p>}
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Email:</label>
                        <input type="text" name="email" id="email" onChange={handleFormData}/>
                        <label>Password:</label>
                        <input type="text" name="password" id="password" onChange={handleFormData}/>
                        <input type="submit" value="Sign In" />
                    </form>
                    <img className="signInPic" src={charizard} alt="dancing charizard"></img>
                </CardContent>
            </Card>
        </Box>
    );
}

export default SignIn;
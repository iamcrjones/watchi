import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import charizard from '../images/Charazard-Gif.gif'


const SignIn = () => {
    return (
        <Box>
            <Card>
                <CardContent>
                    <h1>Sign In</h1>
                    <form>
                        <label>Email:</label>
                        <input type="text" name="Email" />
                        <label>Password:</label>
                        <input type="text" name="Password" />
                        <input type="submit" value="Sign In" />
                    </form>
                    <img className="signInPic" src={charizard} alt="dancing charizard"></img>
                </CardContent>
            </Card>
        </Box>
    );
}

export default SignIn;
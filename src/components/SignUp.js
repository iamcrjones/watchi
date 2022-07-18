import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';


const SignUp = () => {
    return (
        <Box>
            <Card>
                <CardContent>
                    <h1>Sign In</h1>
                    <form>
                        <label>Email:</label>
                        <input type="text" name="Email" />
                        <label>First Name:</label>
                        <input type="text" name="First Name" />
                        <label>Last Name:</label>
                        <input type="text" name="Last Name" />
                        <label>Last Name:</label>
                        <input type="text" name="Last Name" />
                        <label>User Name:</label>
                        <input type="User Name" name="User Name" />
                        <input type="submit" value="Sign In" />
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
}

export default SignUp;
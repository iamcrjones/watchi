import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';




const About = () => {
    return( 
        <Box>
            <Card>
                <CardContent>
                    <h1>About</h1>
                    <p>
                        Some stuff about this page and why it's super Awesome
                    </p>
                    <image src="src/images/Hero-image.png" />
                    </CardContent>
            </Card>
        </Box>
    );
}
                    
export default About;
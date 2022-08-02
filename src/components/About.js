import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Matilda from '../images/Matilda-profile.jpeg'
import aboutHero from '../images/Hero-image.png'
import { Box } from '@mui/material';




const About = () => {
    return(
     <>
        <div className="aboutContainer">
        <div className="aboutText">
                    <h1>About</h1>
                    <p>Some stuff about this page and why it's super Awesome</p>
                    </div>
            <div className="aboutHero">
                    <img className="AboutPic" src={aboutHero} alt="lots of different Anime characters merged in one"></img>
            </div>       
        </div>
        <br/>
        <br/>
        <Box>
            <Card >
                <CardContent>
                    <img className="Team" src={aboutHero} alt="lots of different Anime characters merged in one"></img>
                    <h4 className="Team">Cameron Jones</h4>
                    <FacebookIcon href="https://www.facebook.com/matilda.morton"/>
                    <LinkedInIcon href="https://www.linkedin.com/in/matildamorton"/>
                    <GitHubIcon href="https://github.com/matildamort"/>
                </CardContent>
            </Card>
        </Box>

        <br/>
        <br/>

        <Box>
            <Card >
                <CardContent>
                    <img className="Team" src={Matilda} alt="lots of different Anime characters merged in one"></img>
                    <h4 className="Team">Matilda Morton</h4>
                    <FacebookIcon href="https://www.facebook.com/matilda.morton"/>
                    <LinkedInIcon href="https://www.linkedin.com/in/matildamorton"/>
                    <GitHubIcon href="https://github.com/matildamort"/>
                </CardContent>
                </Card>
        </Box>
    </>
    );
}

export default About;
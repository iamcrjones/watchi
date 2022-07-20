import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import { Box, Icon } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Matilda from '../images/Matilda-profile.jpeg'
import abouthero from '../images/Hero-image.png'



const About = () => {
    return(
     <>
        <div className="aboutContainer">
                    <h1>About</h1>
                    <p>
                        Some stuff about this page and why it's super Awesome
                    </p>
                    <img className="AboutPic" src={abouthero} alt="lots of different Anime characters merged in one"></img>
        </div>

        <br/>
        <br/>
        <box>
            <Card >
                <CardContent>
                    <img className="Team" src={abouthero} alt="lots of different Anime characters merged in one"></img>
                    <h4 className="Team">Cameron Jones</h4>
                    <FacebookIcon href="https://www.facebook.com/matilda.morton"/>
                    <LinkedInIcon href="https://www.linkedin.com/in/matildamorton"/>
                    <GitHubIcon href="https://github.com/matildamort"/>
                </CardContent>
            </Card>
        </box>

        <br/>
        <br/>

        <box>
            <Card >
                <CardContent>
                    <img className="Team" src={Matilda} alt="lots of different Anime characters merged in one"></img>
                    <h4 className="Team">Matilda Morton</h4>
                    <FacebookIcon href="https://www.facebook.com/matilda.morton"/>
                    <LinkedInIcon href="https://www.linkedin.com/in/matildamorton"/>
                    <GitHubIcon href="https://github.com/matildamort"/>
                </CardContent>
                </Card>
        </box>
    </>
    );
}

export default About;
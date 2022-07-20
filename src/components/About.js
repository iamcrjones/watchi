import * as React from 'react';
import abouthero from '../images/Hero-image.png'
import { getShows } from './services/showServices.js'




const About = () => {
    let showList = []
    const shows = getShows()
    .then(data => {
        showList.push(data)
        return showList
    })
    .catch(e=> {console.log(e)})
    return(
        <>
            <div className="aboutContainer">
                <h1>About</h1>
                <p>
                    Some stuff about this page and why it's super Awesome
                </p>
                <img className="AboutPic" src={abouthero} alt="lots of different Anime characters merged in one"></img>
                <div>
                    {shows.data}
                </div>

            </div>
        </>
    );
}

export default About;
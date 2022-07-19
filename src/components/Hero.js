import * as React from 'react';
import starthero from '../images/Hero-image.png'


const Hero = () => {
    return( 
     <>
<div className="aboutContainer">
                    <h1>About</h1>
                    <p>
                        Some stuff about this page and why it's super Awesome
                    </p>
                    <img className="AboutPic" src={starthero} alt="lots of different Anime characters merged in one"></img>
                   
                </div>
        </>
    );
}
                    
export default Hero;
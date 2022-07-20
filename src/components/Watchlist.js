
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Icon } from '@mui/material';
import charizard from '../images/Charazard-Gif.gif'

const Watchlist = () => {
    return(
        <>
            <div className="watchlistContainer">
                <h1>Watchlist</h1>
                <Box>
                    <Card>
                        <CardContent>
                            <img className="signInPic" src={charizard} alt="dancing charizard"></img>
                            <h4>Title</h4>
                            <div className="watchlistButtons">
                            <p> Episodes:{}</p>
                            <p> Rating{}</p>
                            </div>
                            <div className="watchlistButtons">
                            <button className="crunchyRollAdd">Add</button>
                            <button className="funimationAdd">Add</button>
                            <button className="netfilxAdd">Add</button>
                            </div>
                        </CardContent>
                    </Card>
                </Box>
            </div>
        </>
    )
}

export default Watchlist;
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
// import { Link } from "react-router-dom"
import { Typography } from '@mui/material';
import { getShows } from './services/showServices.js'
import {useState, useEffect} from 'react'
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import AddToWatchlist from './AddToWatchlist.js';
import RemoveShow from './RemoveShow.js';

    const initialData = []
    const Shows = () => {
        const [shows, setShows] = useState(initialData)

        useEffect(() => {
            getShows()
            .then(data => {
                const showList = Array.from(data)
                setShows(showList)
                return data
            })
            .catch(e=> {console.log(e)})
        },[])
  
        
        return (
            <>
          
           <Grid container className='top10' >

                {shows.map(show =>
                <Card className="shows" >
                <Grid item  key={show.id}>
                            
                            <img src={show.image} alt={show.name} />
                                <Typography variant="h3">{show.title}</Typography>
                                
                                {/* If day equals true show day */}
                                <p>Release days</p>
                                {show.monday ? <Typography variant="p">Monday </Typography> : null}
                                {show.tuesday ? <Typography variant="p">Tuesday </Typography> : null}
                                {show.wednesday ? <Typography variant="p">Wednesday </Typography> : null}
                                {show.thursday ? <Typography variant="p">Thursday </Typography> : null}
                                {show.friday ? <Typography variant="p">Friday </Typography> : null}
                                {show.saturday ? <Typography variant="p">Saturday </Typography> : null}
                                {show.sunday ? <Typography variant="p">Sunday </Typography> : null}

                                <Typography variant="p">Drops: {show.day}</Typography>
                                <Typography variant="p">enddate: {show.enddate}</Typography>
                                <Grid container  spacing={2}
                                sx={{ 
                                    justifyContent: 'space-between',
                                    textAlign: 'left',
                                    alignItems: 'center',
                                    }}>

                                <Grid item xs={5} md={5}>
                                <Typography variant="p">No of Ep: {show.episodes}</Typography>
                                </Grid>
                                <Grid item xs={5} md={5}>
                                <Typography variant="p">Rating: {show.rating} </Typography>
                                </Grid>
                                </Grid>

                                {/* Seperate component so funcitonality of add to watchlist can be seperated */}
                                <AddToWatchlist/>   
                                <RemoveShow />             
                           
                </Grid>
                </Card>
                    
                )}
            
            </Grid>
            </>
        )
    }



export default Shows;
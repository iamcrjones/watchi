import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
// import { Link } from "react-router-dom"
import { Typography } from '@mui/material';
import { getShows } from './services/showServices.js'
import {useState, useEffect} from 'react'
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import RemoveShow from './RemoveShow.js';
import Button from '@mui/material/Button';

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
          
           <Grid container className='top10'>
                {shows.map(show =>
                <Card className="shows"key={show.id} >
                <Grid item >

                    <Grid item >
                        <img src={show.attributes.picture_url} alt={show.attributes.title} /> 
                    </Grid>

                    <Grid item>
                        <Typography variant="h3">{show.attributes.title}</Typography>
                    </Grid>


                    <Grid item>
                        <p>Release days: </p>
                            {show.monday ? <Typography variant="p">Monday </Typography> : null}
                            {show.tuesday ? <Typography variant="p">Tuesday </Typography> : null}
                            {show.wednesday ? <Typography variant="p">Wednesday </Typography> : null}
                            {show.thursday ? <Typography variant="p">Thursday </Typography> : null}
                            {show.friday ? <Typography variant="p">Friday </Typography> : null}
                            {show.saturday ? <Typography variant="p">Saturday </Typography> : null}
                            {show.sunday ? <Typography variant="p">Sunday </Typography> : null}
                    </Grid>

                                <Grid item>
                                <Typography variant="p">Start Date: {show.startdate}</Typography>
                                </Grid>

                                <Grid item>
                                <Typography variant="p">End Date: {show.enddate}</Typography>
                                </Grid>
                                
                                <Grid container 
                                sx={{ 
                                    justifyContent: 'space-between',
                                    textAlign: 'left',
                                    alignItems: 'center',
                        
                                    }}>

                                <Grid item xs={6} md={5}>
                                <Typography variant="p">No of Ep: {show.episodes}</Typography>
                                </Grid>
                                <Grid item xs={6} md={5}>
                                <Typography variant="p">Rating: {show.rating} </Typography>
                                </Grid>
                                </Grid>

                           


                                <Grid item ="add-to-watchlist" 
                                
                                sx={{ 
                                    border: '4px solid purple',
                        
                                    }}>

                                    {show.crunchyroll ? 
                                    <Button variant="contained" className="show-button" sx={{ 
                                        bgcolor: '#FFBA00',
                                        }}>
                                        Add
                                    </Button> :null}

                                    {show.funimation ? 

                                    <Button variant="contained" className="show-button" sx={{ 
                                        bgcolor: '#9F4DFF',
                                        }}>
                                        Add
                                    </Button> :null}

                                    {show.netflix ?

                                    <Button variant="contained" className="show-button" sx={{ 
                                        bgcolor: '#FF0000',
                                        }}>
                                        Add
                                    </Button>  :null}
                                

                                </Grid>
                                <RemoveShow />             
                                <RemoveShow id={show.id}/>             

                           
                </Grid>
                </Card>
                    
                )}
            
            </Grid>
            </>
        )
    }



export default Shows;
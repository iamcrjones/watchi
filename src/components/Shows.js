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
import { Link } from 'react-router-dom';


    const initialData = []

    const Shows = ({sendID}) => {
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

        console.log(shows)

        // const [searchTerm, setSearchTerm] = useState('')



        return (
            <>

            {/* <div className="search"><input type="text" placeholder="Search..." onChange={event =>{setSearchTerm(event.target.value)}}/> </div> */}

           <Grid container className='top10'>
                
                
                {shows.map(show =>
                <Card className="shows" key={show.attributes.id} >
                <Grid item >

                    <Grid item >
                        <img src={show.attributes.picture_url} alt={show.attributes.title} />
                    </Grid>

                    <Grid item>
                        <Link to={`/show/${show.attributes.id}`} onClick={() => {sessionStorage.setItem('currentShow', show.attributes.id)}}>{<Typography variant="h5">{show.attributes.title}</Typography>}</Link>
                    </Grid>


                    <Grid item>
                        <p>Release days: </p>
                            {show.attributes.picture.record.monday ? <Typography variant="p">Monday </Typography> : null}
                            {show.attributes.picture.record.tuesday ? <Typography variant="p">Tuesday </Typography> : null}
                            {show.attributes.picture.record.wednesday ? <Typography variant="p">Wednesday </Typography> : null}
                            {show.attributes.picture.record.thursday ? <Typography variant="p">Thursday </Typography> : null}
                            {show.attributes.picture.record.friday ? <Typography variant="p">Friday </Typography> : null}
                            {show.attributes.picture.record.saturday ? <Typography variant="p">Saturday </Typography> : null}
                            {show.attributes.picture.record.sunday ? <Typography variant="p">Sunday </Typography> : null}
                    </Grid>


                                <Grid item>

                                <Typography variant="p">Start Date: {show.attributes.startdate}</Typography>
                                </Grid>

                                <Grid item>
                                <Typography variant="p">End Date: {show.attributes.enddate}</Typography>
                                </Grid>
                                
                                <Grid container 
                                sx={{ 
                                    justifyContent: 'space-between',
                                    textAlign: 'left',
                                    alignItems: 'center',
                        
                                    }}>

                                <Grid item xs={6} md={5}>
                                <Typography variant="p">No of Ep: {show.attributes.episodes}</Typography>
                                </Grid>
                                <Grid item xs={6} md={5}>
                                <Typography variant="p">Rating: {show.attributes.rating} </Typography>
                                </Grid>
                                </Grid>

                           


                                <Grid item ="add-to-watchlist" 
                                
                                sx={{ 
                                    border: '4px solid purple',
                        
                                    }}>

                                    {show.attributes.crunchyroll ? 
                                    <Button variant="contained" className="show-button" sx={{ 
                                        bgcolor: '#FFBA00',
                                        }}>
                                        Add
                                    </Button> :null}

                                    {show.attributes.funimation ? 

                                    <Button variant="contained" className="show-button" sx={{ 
                                        bgcolor: '#9F4DFF',
                                        }}>
                                        Add
                                    </Button> :null}

                                    {show.attributes.netflix ?

                                    <Button variant="contained" className="show-button" sx={{ 
                                        bgcolor: '#FF0000',
                                        }}>
                                        Add
                                    </Button>  :null}
                                

                                </Grid>

                                <RemoveShow id={show.id}/>


                           
                </Grid>
                </Card>
                    
                )}
            
            </Grid>
            </>
        )
    }



export default Shows;
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
import crunchyroll from '../images/crunchyroll.svg';
import netflix from '../images/netflix.svg';
import funimation from '../images/funimation.svg';



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


        return (
            <>

            {/* <div className="search"><input type="text" placeholder="Search..." onChange={event =>{setSearchTerm(event.target.value)}}/> </div> */}

           <Grid container className='top10'>
                
                
                {shows.map(show =>
                <Card className="shows" key={show.attributes.id} >

                    
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


                                <Grid item >

                                <Typography variant="p">Start Date: {show.attributes.airdate}</Typography>
                                </Grid>

                                <Grid item>
                                <Typography variant="p">End Date: {show.attributes.enddate}</Typography>
                                </Grid>
                                

                                
                                <Grid container 
                                sx={{ 
                                    justifyContent: 'space-between',
                                    textAlign: 'left',
                                    alignItems: 'center',
                                    border: '3px solid orange',
                        
                                    }}>

                                <Grid item xs={6} md={5}>
                                <Typography variant="p">No of Ep: {show.attributes.episodes}</Typography>
                                </Grid>
                                <Grid item xs={6} md={5}>
                                <Typography variant="p">Rating: {show.attributes.rating} </Typography>
                                </Grid>
                                </Grid>


                                {/* <Grid item> 
                                    {show.attributes.crunchyroll ? 
                                        <img className="showIcons" src={crunchyroll} alt="crunchyroll icon"></img>
                                   :null}
                                   </Grid>
                                   
                                   
                                <Grid item>
                                    {show.attributes.funimation ? 
                                        <img className="showIcons" src={funimation} alt="funimation icon"></img>
                                   :null}
                                </Grid>
                                  
                                   
                                  <Grid item>
                                    {show.attributes.netflix ?
                                        <img className="showIcons" src={netflix} alt="netflix icon"></img>
                                    :null}
                                    </Grid>
                                    </Grid>
                                </Grid> */}

                                <RemoveShow id={show.id}/>

                </Card>
                    
                )}
            
            </Grid>
            </>
        )
    }



export default Shows;
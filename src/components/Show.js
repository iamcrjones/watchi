import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
// import { Link } from "react-router-dom"
import { Typography } from '@mui/material';
import { getShows } from './services/showServices.js'
import {useState, useEffect} from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

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
          
           <Grid container className='top10'>
                        

            
                {shows.map(show =>
                <Grid item className="shows" key={show.id}>

                        
                            <Card>
                            <img src={show.image} alt={show.name} />
                                <Typography variant="h2">{show.title.toUpperCase()}</Typography>
                                <Typography variant="body1">Dropping:{show.day}</Typography>
                                <Typography variant="body1">No of Ep: {show.episodes}</Typography>
                                <Typography variant="body1">{show.rating}</Typography>
                            </Card>
                    </Grid>
                    
                )}
            
            </Grid>
        )


// {/* //     // const getRating = () => {
// //     //     getRating(rating)
// //     //     let total = 0;
// //     //     for(let i = 0; i < data.length; i++){
// //     //         total += data[i].rating;
// //     //     }
// //     //     let average = total / data.length;
// //     //     return average;
// //     //  */}

    }


export default Shows;
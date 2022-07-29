import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import { Typography } from '@mui/material';
import { getShows } from './services/showServices.js'

import {useState, useEffect} from 'react'
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
                {shows.map(show =>
                    <Card key={show.id}>
                        <CardContent>
                                <Link to="/">
                                    <Typography variant="h5">{show.title}</Typography>
                                </Link>
                                <Typography variant="body1">{show.description}</Typography>
                                <Typography variant="body1">{show.day}</Typography>
                        </CardContent>
                    </Card>
                )}
            </>
        )
    }

// {/* //     // const getRating = () => {
// //     //     getRating(rating)
// //     //     let total = 0;
// //     //     for(let i = 0; i < data.length; i++){
// //     //         total += data[i].rating;
// //     //     }
// //     //     let average = total / data.length;
// //     //     return average;
// //     //  */}


export default Shows;
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import { Typography } from '@mui/material';
// import { useState, useEffect } from "react";
// import axios from 'axios';


    // useEffect((show) => {
    //     let showList = []
    //     getShows()
    //     .then(data => {
    //         showList.push(data)
    //         return showList
    //     })
    //     .catch(e=> {console.log(e)})
    //   }, [])


    
    const Shows = ({show}) => {
        return (
           <>
            <Card>
                <CardContent>
                        <link to={`/shows/${show.id}`}>
                            <Typography variant="h5">{show.title}</Typography>
                            </link>
                            <Typography variant="body1">{show.description}</Typography>
                </CardContent>    
            </Card>
            </>
        )
    }
    
    
{/* //     // const getRating = () => {
//     //     getRating(rating)
//     //     let total = 0;
//     //     for(let i = 0; i < data.length; i++){
//     //         total += data[i].rating;
//     //     }
//     //     let average = total / data.length;
//     //     return average;
//     //  */}


export default Shows;
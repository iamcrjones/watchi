import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import { Typography } from '@mui/material';
import { getShows } from './services/showServices.js'

    const Shows = () => {
        getShows()
        .then(data => {
            return data
        })
        .catch(e=> {console.log(e)})
        return (
           <>
            <Card>
                <CardContent>
                        <Link to="/">
                            <Typography variant="h5">{sessionStorage.getItem("shows")}</Typography>
                            </Link>
                            <Typography variant="body1">world</Typography>
                </CardContent>
            </Card>
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
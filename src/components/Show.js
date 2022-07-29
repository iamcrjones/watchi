import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";
import axios from 'axios';


const Shows = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get('/shows');
            setData(response.data);
            setError(null);
          } catch (err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }
        getData();
        }
      }, []);



    // useEffect(() => {
    //     let showList = []
    //     getShows()
    //     .then(data => {
    //         showList.push(data)
    //         return showList
    //     })
    //     .catch(e=> {console.log(e)})
    //   }, [])


    
    
//     // const getRating = () => {
//     //     getRating(rating)
//     //     let total = 0;
//     //     for(let i = 0; i < data.length; i++){
//     //         total += data[i].rating;
//     //     }
//     //     let average = total / data.length;
//     //     return average;
//     // 

return (
    <>
        <div className="App">
            <div className="App-header">
                <h2>WatchiBE</h2>
            </div>
            <div className="App-body">
                <div className="App-body-header">
                    <h3>Shows</h3>
                </div>
                <div className="App-body-content">
                    <div className="App-body-content-shows">
                        {data && data.map(show => (
                            <Card key={show.id}>
                                <CardContent>
                                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                                        <Typography variant="h5" component="h2">
                                            {show.title}
                                        </Typography>
                                        <Link to={`/shows/${show.id}`}>
                                            <Typography variant="h5" component="h2">
                                                View
                                            </Typography>
                                        </Link>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
                     
    )
}


export default Shows;
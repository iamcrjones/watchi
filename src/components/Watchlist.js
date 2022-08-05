
import * as React from 'react';
import { useState, useEffect} from 'react'
import { getMyShows } from './services/watchlistServices';
import Grid from '@mui/material/Grid'; 
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveShow from './RemoveShow'




const Watchlist = () => {
    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null)
    const [watchList, setWatchList] = useState(null)

    useEffect(() => {
        const listID = sessionStorage.getItem('watch_list')
        const data = new FormData()
        data.append('listID', listID)
        getMyShows(data)
        .then((shows) => {
            if(shows.error){
                setError(shows.error)

            }else{
                setWatchList(shows)
                setLoading(false)
            }
        })
        .catch(e=> {
            setError(e.message)
        })
    }, [loading])
    return(
        <>
            {error && <h1>{error}</h1>}
            {loading === false && watchList.map((shows) =>
                <>

                    <Card className="shows" key={shows.id} >
                    <Grid container className="card">

                    <Grid item xs={12} md={12}>
                        <img src={shows.picture_url} alt={shows.title} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Link to={`/show/${shows.id}`} onClick={() => {sessionStorage.setItem('currentShow', shows.id)}}>{<Typography variant="h5">{shows.title}</Typography>}</Link>
                    
                    </Grid>

                    {/* <Grid item className="releaseDays" xs={12} md={12}>
                        <p>Release days: </p>
                            {shows.monday ? <Typography variant="p">Monday </Typography> : null}
                            {shows.tuesday ? <Typography variant="p">Tuesday </Typography> : null}
                            {shows.wednesday ? <Typography variant="p">Wednesday </Typography> : null}
                            {shows.thursday ? <Typography variant="p">Thursday </Typography> : null}
                            {shows.friday ? <Typography variant="p">Friday </Typography> : null}
                            {shows.saturday ? <Typography variant="p">Saturday </Typography> : null}
                            {shows.sunday ? <Typography variant="p">Sunday </Typography> : null}
                    </Grid> */}

                    <Grid item className="dates" xs={12} md={12} >
                     <Typography variant="p">Start Date: {shows.airdate}</Typography>
                    </Grid>
                    

                    <Grid item className="dates" xs={12} md={12}>
                        <Typography variant="p">End Date: {shows.enddate}</Typography>
                    </Grid>


                    {/* <Grid item className="displayIcons">
                    {show.attributes.crunchyroll ? 
                    // <TaskAltIcon className="icons" />
                            // <img className="showIcons" src={crunchyroll} alt="crunchyroll icon"></img>
                        :null}

                        {show.attributes.funimation ? 
                        // <TaskAltIcon className="icons" />
                        // <img className="showIcons" src={funimation} alt="funimation icon"></img>
                        :null}

                        {show.attributes.netflix ? 
                        // <TaskAltIcon className="icons" />
                        // <img className="showIcons" src={netflix} alt="netflix icon"></img>
                        :null}
                    </Grid> */}

                    <Grid item xs={12}>
                        {/* <Button
                            className="buttons"
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Add Show
                        </Button> */}
                        </Grid>

                                
                        {/* <RemoveShow id={shows.id}/>  */}

                    </Grid>
                    
                
                </Card>
                </>
            )}
        </>
    )
}

export default Watchlist;
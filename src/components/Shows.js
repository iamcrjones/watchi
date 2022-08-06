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
// import { Link } from 'react-router-dom';
import AddToWatchlist from './AddToWatchlist.js';
// import crunchyroll from './crunchyroll.jsx'
// import netflix from '../images/netflix.svg';
// import funimation from '../images/funimation.svg';
// import crunchyroll from '../images/crunchyroll.svg';
// import funimation from './funimation.jsx';
// import crunchyroll from './crunchyroll.jsx';
// import TaskAltIcon from '@mui/icons-material/TaskAlt';



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
            <Grid container className='top10'>

            {shows.map(show =>
                <Card className="shows" key={show.attributes.id} >
                    <Grid container className="card">

                    <Grid item xs={12} md={12}>
                        <img src={show.attributes.picture_url} alt={show.attributes.title} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Typography variant="h5" onClick={() => {
                            sessionStorage.setItem('currentShow', show.attributes.id)
                            window.location.href=`/show/${show.attributes.id}`
                            }}>
                                {show.attributes.title}
                        </Typography>
                    </Grid>

                    <Grid item className="releaseDays" xs={12} md={12}>
                        <p>Release days: </p>
                            {show.attributes.picture.record.monday ? <Typography variant="p">Monday </Typography> : null}
                            {show.attributes.picture.record.tuesday ? <Typography variant="p">Tuesday </Typography> : null}
                            {show.attributes.picture.record.wednesday ? <Typography variant="p">Wednesday </Typography> : null}
                            {show.attributes.picture.record.thursday ? <Typography variant="p">Thursday </Typography> : null}
                            {show.attributes.picture.record.friday ? <Typography variant="p">Friday </Typography> : null}
                            {show.attributes.picture.record.saturday ? <Typography variant="p">Saturday </Typography> : null}
                            {show.attributes.picture.record.sunday ? <Typography variant="p">Sunday </Typography> : null}
                    </Grid>

                    <Grid item className="dates" xs={12} md={12} >
                     <Typography variant="p">Start Date: {show.attributes.airdate}</Typography>
                    </Grid>
                    

                    <Grid item className="dates" xs={12} md={12}>
                        <Typography variant="p">End Date: {show.attributes.enddate}</Typography>
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
                        <Button
                            className="buttons"
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                        {<AddToWatchlist show={show.attributes.id}/>}
                        </Button>
                        </Grid>
                        <RemoveShow id={show.id}/>
                    </Grid>
                </Card>
            )
            }

        </Grid>
            </>
        )
    }


export default Shows;
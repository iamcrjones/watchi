import * as React from 'react';
import { useState, useEffect} from 'react'
import { getMyShows } from './services/watchlistServices';
import Modal from '@mui/material/Modal';
import { Box, Card, CardContent } from '@mui/material';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const Watchlist = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null)
    const [watchList, setWatchList] = useState(null)

    useEffect(() => {
        const listID = sessionStorage.getItem('watch_list')
        const data = new FormData()
        data.append('listID', listID)
        if(!sessionStorage.getItem('user_id')){
            handleOpen()
        }
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
            {sessionStorage.getItem('user_id') ? (
                <>
                    {error && <h1>{error}</h1>}
                    {loading === false && watchList.map((shows) =>
                        <>
                         <Card className="shows">
                         <Grid container className="card">

                        <Grid item xs={12} md={12}>
                            <img src={shows.picture_url} alt={shows.title} />
                        </Grid>

                        <Grid item xs={12} md={12}>
                        <Typography variant="h5" className="showCardTitle" onClick={() => {
                            sessionStorage.setItem('currentShow', shows.id)
                            window.location.href=`/show/${shows.id}`
                            }}>
                                {shows.title}
                        </Typography>
                        </Grid>

                        <Grid item className="releaseDays" xs={12} md={12}>
                        <p>Release days: </p> 
                        <p>If empty shows has already finished airing </p>                           
                            {shows.monday ? <Typography variant="p">Monday </Typography> : null}
                            {shows.tuesday ? <Typography variant="p">Tuesday </Typography> : null}
                            {shows.wednesday ? <Typography variant="p">Wednesday </Typography> : null}
                            {shows.thursday ? <Typography variant="p">Thursday </Typography> : null}
                            {shows.friday ? <Typography variant="p">Friday </Typography> : null}
                            {shows.saturday ? <Typography variant="p">Saturday </Typography> : null}
                            {shows.sunday ? <Typography variant="p">Sunday </Typography> : null}
                    </Grid>

                    <Grid item className="dates" xs={12} md={12} >
                     <Typography variant="p">Start Date: {shows.airdate}</Typography>
                    </Grid>
                    

                    <Grid item className="dates" xs={12} md={12}>
                        <Typography variant="p">End Date: {shows.enddate}</Typography>
                    </Grid>

                    <Grid item className="releaseDays" xs={12} md={12}>
                        <p>Platforms: </p>
                        {shows.crunchyroll ? <Typography variant="p">Crunchyroll </Typography> : null}
                        {shows.funimation ? <Typography variant="p">funimation </Typography> : null}
                        {shows.netflix ? <Typography variant="p">Netflix </Typography> : null}
                        </Grid>
                        </Grid>
                        </Card>
                        </>
                    )}
                </>
            ) : (
                <>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Card>
                                <CardContent>
                                    {sessionStorage.getItem("user_id")? (
                                        <>
                                            <h1>Added to your list</h1>
                                            <Button onClick={handleClose}>OK</Button>
                                        </>
                                    )
                                    : (
                                        <>
                                            <h1>You must be signed in to view your watchlist</h1>
                                            <Button onClick={() => {window.location.href="/signin"}}>OK</Button>
                                        </>
                                    )}
                            </CardContent>
                            </Card>
                        </Box>
                    </Modal>
                </>
            )}
        </>
    )
}

export default Watchlist;
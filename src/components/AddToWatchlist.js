import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import Modal from '@mui/material/Modal';
import { Box, Card, CardContent } from '@mui/material';
import { addWatchShow } from './services/watchlistServices';


const AddToWatchlist = () => {
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(null)
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

    const addToList = () => {
        const data = new FormData()
        const watchlist = sessionStorage.getItem('watch_list')
        const show = sessionStorage.getItem('currentShow')
        data.append("show_id", show)
        data.append("watchlist_id", watchlist)
        handleOpen()
            if(sessionStorage.getItem('user_id')){
            addWatchShow(data)
            .then((result) => {
                if (result.error){
                    setError(result.error)
                } else {
                    console.log("successfully added show")
                }
            })
            .catch((e)=> {
                setError(e)
                alert(error)
            })
        }else{
            // window.location.href="/signup"
        }
    }
    return(
        <>
            <div onClick={addToList} className="addShowButton"><AddToQueueIcon/> <p className="addShowText">Add Show</p></div>
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
                                    <h1>You need to be signed in to add a show</h1>
                                    <Button onClick={() => {window.location.href="/signin"}}>OK</Button>
                                </>
                            )}
                        </CardContent>
                    </Card>
                </Box>
            </Modal>
        </>
    )
}

export default AddToWatchlist;
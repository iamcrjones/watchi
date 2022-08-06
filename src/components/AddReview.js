import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Button, TextField} from '@mui/material';
import { useState } from "react"
import { addReview } from './services/reviewServices';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Modal from '@mui/material/Modal';

const AddReview = (showID) => {

    // State values for the modal component required by Material UI
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
        textAlign: 'left',
      };

    // State values for if errors are raised
    const [error, setError] = useState(null)

    // The function that is called when a user wishes to submit a review
    const handleSubmit = (e) =>{
        e.preventDefault()
        const user_id = sessionStorage.getItem('user_id')
        // Creates a new FormData and adds the data from what was filled out on the form
        const data = new FormData()
        data.append("rating", e.target.rating.value)
        data.append("message", e.target.message.value)
        data.append("user_id", user_id)
        data.append("show_id", showID.showID)
        // The actual function that handles the post request to the API.
        // Refreshes page upon success to get the newly created review from the database
        addReview(data)
        .then((review) => {
            if(review.error){
                setError(review.error)
            }else{
                setError(null)
                window.location.reload()
            }
        })
        .catch(e=> {
            setError(e)

        })

    }

    return(
        <>
            <RateReviewIcon  onClick={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card>
                    {/* Logic to see if a user is signed in. If not signed in they will be redirected to the sign in page */}
                    {sessionStorage.getItem('user_id') ? (
                        <CardContent>
                            <h1>Add Review</h1>
                            {error && <h3>{error}</h3>}
                            <form onSubmit={handleSubmit}>

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="message"
                                    label="description"
                                    name="message"
                                    autoComplete="message"
                                    autoFocus
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="rating"
                                    label="rating"
                                    name="rating"
                                    autoComplete="rating"
                                    autoFocus
                                />
                                <input type="submit" />
                            </form>
                        </CardContent>
                    ): (
                        <CardContent>
                            <h1>You need to be signed in to write a review.</h1>
                            <Button onClick={() => {window.location.href="/signin"}}>OK</Button>
                        </CardContent>
                    )}
                    </Card>
                </Box>
            </Modal>
        </>
    )
}

export default AddReview;
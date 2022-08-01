import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import { useState } from "react"
import { addReview } from './services/reviewServices';


const AddReview = () => {

    const userId = sessionStorage.getItem('userId')

    // function userCheck() {
    //     if (!user) {
    //         alert('Unauthorized access...')
    //         window.location.href = '/';
    //     }

    const [error, setError] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = new FormData()
        data.append("rating", e.target.rating.value)
        data.append("message", e.target.message.value)
        data.append("user", userId)
        // data.append("show", showId)
   
        addReview(data)
        .then((review) => {
            if(review.error){
                setError(review.error)
            }else{
                setError(null)
              

            }
        })
        .catch(e=> {
            console.log(data)
            console.log(e.response)
            console.log(e)
            setError(e.response.data.error)

        })

    }

    return(
        <>
            <Box>
                <Card>
                    <CardContent>
                <h1>Add Review</h1>
                {error && <h3>{error}</h3>}
                <form onSubmit={handleSubmit}>
                    <label>Description:</label>
                    <input type="text" name="message" id="message" />
                    <label>Rating:</label>
                    <input type="text" name="rating" id="rating" />
                    <input type="submit" />
                    </form>
                    </CardContent>
                </Card>
            </Box>
        </>

    )
}

export default AddReview;
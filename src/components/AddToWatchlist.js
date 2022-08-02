import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import { addWatchShow } from './services/watchShowServices';





const AddToWatchlist = () => {
    const user_id = sessionStorage.getItem('user_id')
    const data = new FormData()
    data.append("user_id", user_id)
    data.append("show_id", showID.showID)

    addReview(data)
        .then(() => {
            if(review.error){
                setError(review.error)
            }else{
                setError(null)
                window.location.reload()
            }
        })
        .catch(e=> {
            // console.log(data)
            console.log(e.response)
            console.log(e)
            setError(e.response.data.error)

        })

    }
     
    
    return(
    <>

        <Button variant="contained" color="primary"></Button>
        

    </>
    ) 
}   

export default AddToWatchlist;
import * as React from 'react';
import Button from '@mui/material/Button';



const createWatchlist = () => {
    const user_id = sessionStorage.getItem('user_id')

    const data = new FormData()
    data.append("user_id", user_id)
    

    return(
        <>
            <Button variant="contained" color="primary"></Button>
        </>
    )
}


export default createWatchlist;
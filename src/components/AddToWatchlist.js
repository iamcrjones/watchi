import * as React from 'react';
import Button from '@mui/material/Button';

const AddToWatchlist = () => {
    return(
        <>
        <div className="add-to-watchlist" >
            <Button variant="contained" className="show-button" sx={{ 
                bgcolor: '#FFBA00',
                }}>
                Add
            </Button>

            <Button variant="contained" className="show-button" sx={{ 
                bgcolor: '#9F4DFF',
                }}>
                Add
            </Button>

            <Button variant="contained" className="show-button" sx={{ 
                bgcolor: '#FF0000',
                }}>
                Add
            </Button>  
        </div>
        </>
    )
}   

export default AddToWatchlist;
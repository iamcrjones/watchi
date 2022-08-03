
import * as React from 'react';
import { useState, useEffect} from 'react'
import { getMyShows } from './services/watchlistServices';


const Watchlist = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const listID = sessionStorage.getItem('watch_list')
        const data = new FormData()
        data.append('listID', listID)
        getMyShows(listID)
        .then((show) => {
            if(show.error){
                setError(show.error)

            }else{
                setLoading(false)
            }
        })
        .catch(e=> {
            setError(e.message)
        })
    }, [loading])
    return(
        <>
            
        </>
    )
}

export default Watchlist;
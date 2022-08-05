
import * as React from 'react';
import { useState, useEffect} from 'react'
import { getMyShows } from './services/watchlistServices';
// import { pullSingleShow } from './services/showServices';




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
                    <h1>{shows.title}</h1>
                    <img src={shows.picture_url} alt={shows.title}></img>
                </>
            )}
        </>
    )
}

export default Watchlist;
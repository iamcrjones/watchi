import * as React from 'react';
import { pullSingleShow } from './services/showServices';
import { useState , useEffect} from 'react'

const IndividualShow = () => {
    const [error, setError] = useState(null)
    const [currentShow, setCurrentShow] = useState(null)
    const [loading, setLoading] = useState(true)
    const parser = JSON.parse(currentShow)

    useEffect(() => {
        pullSingleShow(sessionStorage.getItem('currentShow'))
        .then((show) => {
            if(show.error){
                setError(show.error)

            }else{
                setError(null)
                setCurrentShow(sessionStorage.getItem('show'))
                setLoading(false)
            }
        })
        .catch(e=> {
            console.log(e)
            setError(e.message)
        })
    }, [])


    return (
        loading ? (
            <h1>Loading...</h1>
        )
        :
        (
            <>
                {error && <h2>{error}</h2>}
                <div className="showContainer">
                    <h1>{parser.title}</h1>
                    <h4>Episodes: {parser.episodes}</h4>
                    <p>{parser.description}</p>
                </div>
            </>
        )
    )
}

export default IndividualShow
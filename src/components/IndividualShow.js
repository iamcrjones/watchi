import * as React from 'react';
import { pullSingleShow } from './services/showServices';
import { useState , useEffect} from 'react'
import { Card } from '@mui/material';
import AddReview from './AddReview';
// import RemoveShow from './RemoveShow.js';

const IndividualShow = () => {
    const [error, setError] = useState(null)
    const [currentShow, setCurrentShow] = useState(null)
    const [loading, setLoading] = useState(true)
    const [rating, setRating] = useState(0)
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
                if (loading === false){
                    const reviews = show.attributes.reviews
                    let showRating = 0
                    for(let i=0; i<reviews.length; i++){
                        let thisRating = reviews[i].rating
                        showRating += thisRating
                    }
                    showRating = showRating/reviews.length
                    setRating((reviews.length < 1 ? "No reviews yet" : showRating))
                }
            }
        })
        .catch(e=> {
            console.log(e)
            setError(e.message)
        })
    }, [loading])


    return (
        loading ? (
            <h1>Loading...</h1>
        )
        :
        (
            <>
                {error && <h2>{error}</h2>}
                <div className="showContainer">
                    <div className="showInfo">
                        <img src={parser.picture_url} alt={parser.title} className="fullShowImage"/>
                        <div className="showTextInfo">
                            <h2 className="fullShowHeader">{parser.title}</h2>
                            <h4>Episodes: {parser.episodes}</h4>
                            <h4>⭐️ {rating} </h4>
                            {console.log(parser.id)}
                            <AddReview showID={parser.id}/>
                        </div>
                    </div>

                    <p className="showDescription">{parser.description}</p>

                    <div className="showReviewContainer">
                        <h2 className="showReviewHeader">What do others think?</h2>
                        {parser.reviews.map((review) =>
                        <div key={review.user_id}>
                            <Card variant="contained" key={review.id}>
                                <h4> ⭐️ {review.rating}</h4>
                                <h4>{review.message}</h4>
                                <p>{review.user_id}</p>
                            </Card>
                        </div>
                        )}
                    </div>
                </div>
            </>
        )
    )
}

export default IndividualShow
import * as React from 'react';
import { pullSingleShow } from './services/showServices';
import { useState , useEffect} from 'react'
import { Card } from '@mui/material';
import AddReview from './AddReview';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteReview } from './services/reviewServices';
import AddToWatchlist from './AddToWatchlist';



const IndividualShow = () => {
    // State management values assigned
    const [error, setError] = useState(null)
    const [currentShow, setCurrentShow] = useState(null)
    const [loading, setLoading] = useState(true)
    const [rating, setRating] = useState(0)
    // Parses the session storage item to JSON in order to be able to use the data correctly in the return below.
    const parser = JSON.parse(currentShow)

    useEffect(() => {
        // Pulls the data using the session storage item that contains the ID of the show being viewed.
        pullSingleShow(sessionStorage.getItem('currentShow'))
        .then((show) => {
            if(show.error){
                setError(show.error)

            }else{
                setError(null)
                setCurrentShow(sessionStorage.getItem('show'))
                //Loading is set to false when the request is successful and allows the component to render the information.
                setLoading(false)
                // For loop in order to calculate the average rating for the current show based off all reviews contained in the show's data.
                if (loading === false){
                    const reviews = show.attributes.reviews
                    let showRating = 0
                    for(let i=0; i<reviews.length; i++){
                        let thisRating = reviews[i].rating
                        showRating += thisRating
                    }
                    showRating = showRating/reviews.length
                    // Displays No reviews yet if the show has no reviews attached to it.
                    setRating((reviews.length < 1 ? "No reviews yet" : showRating))
                }
            }
        })
        .catch(e=> {
            setError(e.message)
        })
    }, [loading])

    // Handles the deletion of a review. Will only be successful if the request is made by the creator of the review, or an admin.
    const handleDelete = (review_id) => {
        const confirmBox = window.confirm('Are you sure you want to delete this review?')
        if(confirmBox === true){
            deleteReview(review_id)
            .then((review) => {
                if(review.error){
                    setError(review.error)

                }else{
                    setError(null)
                    alert("Review deleted successfully")
                    window.location.reload()
                }
            })
            .catch((e) => {
                alert(e.response.data.error)
                window.location.reload()
            })
        }
       }

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
                            <p>Episodes: {parser.episodes}</p>
                            <p>⭐️ {rating} </p>

                            <AddToWatchlist show={sessionStorage.getItem('currentShow')}/>
                            <AddReview showID={parser.id}/>
                        </div>
                    </div>

                    <p className="showDescription">{parser.description}</p>

                    <div className="showReviewContainer">
                        <h2 className="showReviewHeader">What do others think?</h2>
                        {/* Displays all the reviews that belongs to the current show.*/}
                        {parser.reviews.map((review) =>
                        <div key={review.user_id}>
                            <Card variant="contained" className="allReviews" key={review.id}>
                                <p> ⭐️ {review.rating}</p>
                                <p>{review.message}</p>
                                {/* <p>{review.user_id}</p> */}
                                <DeleteOutlineIcon onClick={() => {handleDelete(review.id)}}/>
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
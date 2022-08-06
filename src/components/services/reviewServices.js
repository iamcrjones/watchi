
import watchiBE from "../../config/api.js"


// sends a post request with form data of params to create a review attached to a show
export async function addReview(data){
    const response = await watchiBE.post('/reviews', data)
    return response.data
}


// sends request with data passed into it to delete a review
export async function deleteReview(data){
    const response = await watchiBE.delete(`/reviews/${data}`)
    return response.data
}


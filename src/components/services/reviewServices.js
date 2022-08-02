
import watchiBE from "../../config/api.js"

export async function addReview(data){
    const response = await watchiBE.post('/reviews', data)
    return response.data
}

export async function deleteReview(data){
    const response = await watchiBE.delete(`/reviews/${data}`)
    return response.data
}


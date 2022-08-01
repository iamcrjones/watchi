
import watchiBE from "../../config/api.js"

export async function addReview(data){
    const response = await watchiBE.post('/reviews', data)
    console.log(response.data)
    return response.data
}


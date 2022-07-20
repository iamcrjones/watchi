import watchiBE from "../../config/api.js"

export async function getShows(){
    const response = await watchiBE.get('/shows')
    console.log(response.data)
    return response.data
}
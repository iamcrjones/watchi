import watchiBE from "../../config/api.js"

export async function getShows(){
    const response = await watchiBE.get('/shows')
    console.log(response.data)
    return response.data
}

export async function pullSingleShow(data){
    const response = await watchiBE.get(`/shows/${data}`)
    console.log(response.data)
    return response.data
}

export async function addShow(data){
    const response = await watchiBE.post('/shows', data)
    console.log(response.data)
    return response.data
}

export async function removeShow(data){
    const response = await watchiBE.delete(`/shows/${data}`)
    console.log(response.data)
    return response.data
}
import watchiBE from "../../config/api.js"

export async function getShows(){
    const response = await watchiBE.get('/shows')
    return response.data
}

export async function pullSingleShow(data){
    const response = await watchiBE.get(`/shows/${data}`)
    sessionStorage.setItem('show', JSON.stringify(response.data.attributes))
    return response.data
}

export async function pullUsername(data){
    const response = await watchiBE.get(`/users/${data}`)
    return response.data.username
}

export async function addShow(data){
    const response = await watchiBE.post('/shows', data)
    console.log(response.data)
    return response.data
}

export async function removeShow(data){
    const response = await watchiBE.delete(`/shows/${data}`)
    // console.log(response.data)
    return response.data
}

export async function addShowToWatchShow(data){
    const response = await watchiBE.post('/watchshows', data)
    console.log(response.data)
    return response.data
}



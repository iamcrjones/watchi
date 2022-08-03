import watchiBE from "../../config/api.js"

export async function getWatchShow () {
    const response = await watchiBE.get('/watchshows')
    return response.data
}

export async function addWatchShow(data){
    const response = await watchiBE.post('/reviews', data)
    console.log(response.data)
    return response.data
}


export async function removeWatchShow(data){
    const response = await watchiBE.delete(`/watchshows/${data}`)
    console.log(response.data)
    return response.data
}

export async function createWatchlist(data){
    const response = await watchiBE.post('/watchlists', data)
    console.log(response.data)
    return response.data
}

export async function getWatchList() {
    const response = await watchiBE.get('/watchlists')
    return response.data
}
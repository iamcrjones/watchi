import watchiBE from "../../config/api.js"

export async function getWatchShow () {
    const response = await watchiBE.get('/watchshows')
    return response.data
}

export async function addWatchShow(data){
    const response = await watchiBE.post('/watchshows', data)
    return response.data
}


export async function removeWatchShow(data){
    const response = await watchiBE.delete(`/watchshows/${data}`)
    return response.data
}

export async function createWatchlist(data){
    const response = await watchiBE.post('/watchlists', data)
    sessionStorage.setItem('watch_list', response.data.id)
    return response.data
}

export async function getWatchList() {
    const response = await watchiBE.get('/list/mylist')
    sessionStorage.setItem('watch_list', response.data)
    return response.data
}

export async function getMyShows(data){
    const response = await watchiBE.post('/list/myshows', data)
    return response.data
}
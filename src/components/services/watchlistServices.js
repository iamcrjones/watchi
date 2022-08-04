import watchiBE from "../../config/api.js"

export async function getWatchShow () {
    const response = await watchiBE.get('/watchshows')
    return response.data
}

export async function addWatchShow(data){
    const response = await watchiBE.post('/watchshows', data)
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
    const response = await watchiBE.get('/list/mylist')
    console.log(response.data)
    return response.data
}

export async function getMyShows(data){
    const response = await watchiBE.post('/list/myshows', data)
    // const showIdList = []
    // response.data.map((show) => showIdList.push(show.show_id))
    // sessionStorage.setItem('watchListShowList', showIdList)
    // console.log()
    console.log(response.data)
    return response.data
}
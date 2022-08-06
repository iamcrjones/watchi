import watchiBE from "../../config/api.js"

// Sends a get request to get all shows through index method in the backend.
export async function getShows(){
    const response = await watchiBE.get('/shows')
    return response.data
}


// Requests the data of a single show with the show_id passed in as param to query the database
export async function pullSingleShow(data){
    const response = await watchiBE.get(`/shows/${data}`)
    // sets the show_id in session storage for other functions that need the show's attributes
    sessionStorage.setItem('show', JSON.stringify(response.data.attributes))
    return response.data
}

// Intended to pull the username from database but is not MVP and is not correctly functioning
export async function pullUsername(data){
    const response = await watchiBE.get(`/users/${data}`)
    return response.data.username
}

// Admin only request that takes form data and sends a post request to create a show in the database.
// Data for image file is redirected to upload to AWS s3 bucket for active storage and returns url for the image as attribute
export async function addShow(data){
    const response = await watchiBE.post('/shows', data)
    return response.data
}

// Admin only request to delete a show from the database based off the id passed into the request
export async function removeShow(data){
    const response = await watchiBE.delete(`/shows/${data}`)
    return response.data
}



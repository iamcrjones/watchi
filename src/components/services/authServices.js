import watchiBE from "../../config/api.js"


// submits a post request to the api with login details and returns data.
// if login is successful admin status is set in session storage for conditional rendering purposes
// but does not allow unauthorized access to operations within the app
export async function signIn(data) {
    const response = await watchiBE.post('/auth/login', data)
    if(response.data.admin !== true){
        sessionStorage.setItem('admin', false)
    } else {
        sessionStorage.setItem('admin', true)
    }
    return response.data
}

// creates an entry in the user table of database with the information provided in the form
export async function signUp(data) {
    const response = await watchiBE.post('/auth/signup', data)
    return response.data
}



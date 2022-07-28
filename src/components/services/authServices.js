import watchiBE from "../../config/api.js"



export async function signIn(data) {
    const response = await watchiBE.post('/auth/login', data)
    // console.log(response.data)
    sessionStorage.setItem('username', response.data.username)
    sessionStorage.setItem('id', response.data.id)
    if(response.data.admin !== true){
        sessionStorage.setItem('admin', false)
    } else {
        sessionStorage.setItem('admin', true)
    }
    // console.log(response.data.username, response.data.id, response.data.admin)
    return response.data
}

export async function signUp(data) {
    const response = await watchiBE.post('/auth/signup', data)
    console.log(response.data)
    // return response.data
}
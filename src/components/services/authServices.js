import watchiBE from "../../config/api.js"



export async function signIn(data) {
    const response = await watchiBE.post('/auth/login', data)
    if(response.data.admin !== true){
        sessionStorage.setItem('admin', false)
    } else {
        sessionStorage.setItem('admin', true)
    }
    return response.data
}

export async function signUp(data) {
    const response = await watchiBE.post('/auth/signup', data)
    // console.log(response.data)
    return response.data
}



import watchiBE from "../../config/api.js"



export async function signIn(data) {
    const response = await watchiBE.post('/auth/login', data)
    console.log(response.data)
    return response.data
}

export async function signUp(data) {
    const response = await watchiBE.post('/auth/signup', data)
    console.log(response.data)
    // return response.data
}
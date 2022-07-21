import watchiBE from "../../config/api.js"



export async function signIn(data) {
    const response = await watchiBE.post('/auth/login', data)
    console.log(response.data)
    return response.data
}

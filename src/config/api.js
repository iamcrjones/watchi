// info from the backend url

import axios from 'axios'

const watchiBE = axios.create({
    baseURL: 'http://localhost:4000'
})

watchiBE.interceptors.request.use(req => {
    // send token in request
    const token = sessionStorage.getItem('token')
    //Authorization -> Bearer token -> paste token
    if (token) {
        req.headers['Authorization'] =`Bearer ${token}`
    }

    return req
})

export default watchiBE
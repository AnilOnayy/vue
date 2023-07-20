import axios from 'axios'

export default axios.create({
    baseURL : "http://www.localhost:3000/",
    withCredentials:false,
    headers : {
        "tokenX" : "myToken",
        "Content-Type" : "application/json"
    }
})


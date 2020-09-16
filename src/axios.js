const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://tiktok-mern-backend-dev.herokuapp.com/'
})

export default instance
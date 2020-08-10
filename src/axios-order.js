import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rentit-86cde.firebaseio.com/'
})

export default instance;
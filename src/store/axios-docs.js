import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8888',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': localStorage.getItem('token')
    }
});

export default instance;
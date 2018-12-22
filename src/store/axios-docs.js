import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pocketmsg.ru:8888',
    headers: {'Content-Type': 'application/x-www-form-urlencoded',
			// 'token': localStorage.getItem('token')
			}
});

export default instance;
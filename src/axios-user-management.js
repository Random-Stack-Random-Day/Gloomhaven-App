import axios from 'axios';
import Storage from './hoc/UserManagement/Storage'
const configuredAxios = axios.create({
    baseURL: 'https://gloomhaven-react-dnorthrup.c9users.io'
});



configuredAxios.interceptors.request.use((req) => {
    let user = null
    if (Storage.get('user')) 
        user = JSON.parse(Storage.get('user'))
        req.headers['access-token'] = user['access_token'];
        req.headers['client'] = user['client'];
        req.headers['uid'] = user['uid'];
        req.headers['Content-Type'] = ['application/json']
    return req;
});

configuredAxios.interceptors.response.use((res) => {
    return res;
}, (err) => {

    const originalReq = err.config;

    if (err.response.status === 401 && !originalReq._retry) {
        
        originalReq._retry = true;
        console.log("Non-valid");
    }

    return Promise.reject(err);
});

export default configuredAxios;
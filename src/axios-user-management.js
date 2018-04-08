import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gloomhaven-react-dnorthrup.c9users.io'
});

export default instance;
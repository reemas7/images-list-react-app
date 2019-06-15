import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 0ca542850be8554ab0b6c4965e9c6bbf1c526f6bbf0b1e52b80a328250367d42'
    }
});


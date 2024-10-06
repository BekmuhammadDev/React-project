import axios from "axios";

export const api = axios.create({
    baseURL:'https://api.escuelajs.co/api/v1',
    timeout:3600*24,
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
})
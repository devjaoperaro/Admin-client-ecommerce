import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
var TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")as any)?.user)?.currentUser?.accessToken;



export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`,
    },
});
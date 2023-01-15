import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { getEnvVariables } from '../helpers'; 


const { VITE_API_URL } = getEnvVariables();

const config: AxiosRequestConfig = {
    baseURL: VITE_API_URL
}

const journalApi:AxiosInstance = axios.create(config);

journalApi.interceptors.request.use((config:AxiosRequestConfig) =>{
    return{
        headers:{
            'x-token': localStorage.getItem('token') || ''
        }
    }
}); 


export default journalApi; 



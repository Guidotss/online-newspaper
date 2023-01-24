import axios, {AxiosRequestConfig,AxiosInstance} from 'axios'; 
import { getEnvVariables } from '../helpers'; 

const { VITE_CLOUDINARY_URL } = getEnvVariables();

const config: AxiosRequestConfig = {
    baseURL: VITE_CLOUDINARY_URL,
}

const cloudinaryApi: AxiosInstance = axios.create(config);
export default cloudinaryApi;
import { useAppSelector, useAppDispatch } from './hooks'; 
import { login,logout,checking,clearErrorMessage } from '../store/auth/authSlice';
import { journalApi } from '../api';
import { AxiosAuthResponse } from '../interfaces';


export const useAuth = () => {

    const dispatch = useAppDispatch();
    const { status,errorMessage,user } = useAppSelector((state) => state.auth);

    const startLogin = async(email:string, password:string):Promise<void> => {

        dispatch(checking());

        try{
            const { data }  = await journalApi.post<AxiosAuthResponse>('/auth/login', { email, password });
            if(data.ok){

                const { name,lastName,token,isCeo,isJournalist } = data;
                localStorage.setItem('token',token);
                localStorage.setItem('token-init-date',new Date().getTime().toString());
                dispatch(login({user:{name,lastName,token,isCeo,isJournalist}}));
                dispatch(clearErrorMessage());
            }
        }catch(error:any){
            console.log(error.response.data.msg);
            dispatch(logout({errorMessage:error.response.data.msg}));
        }

        setTimeout(() => {
            dispatch(clearErrorMessage());
        },10)
    }


    const startRegister = async(name:string, lastName:string, email:string, password:string):Promise<void> => {
        dispatch(checking());
        
        try{
            const { data } = await journalApi.post<AxiosAuthResponse>('/auth/register', { name, lastName, email, password });
            if(data.ok){
                const {name,lastName,isCeo,isJournalist,token} = data; 
                localStorage.setItem('token',token);
                localStorage.setItem('token-init-date',new Date().getTime().toString());
                dispatch(login({user:{name,lastName,isCeo,isJournalist,token}}));
            }
            
        }catch(error:any){
            console.log(error.response.data.msg);
            dispatch(logout({errorMessage:error.response.data.msg}));
            
        }
        setTimeout(() =>{
            dispatch(clearErrorMessage());
        },10)
    }


    const checkToken = async():Promise<void> => {
        const token = localStorage.getItem('token');

        if(!token){
            dispatch(logout({errorMessage:'No token'}));
        }

        try{
            const { data } = await journalApi.get<AxiosAuthResponse>('/auth/renew');
            if(data.ok){
                const {name,lastName,isCeo,isJournalist,token} = data; 
                localStorage.setItem('token',token);
                localStorage.setItem('token-init-date',new Date().getTime().toString());
                dispatch(login({user:{name,lastName,isCeo,isJournalist,token}}));
            }

        }catch(error){
            localStorage.clear();
            dispatch(logout({errorMessage:'No token'}));
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(logout({errorMessage:null}));
    }

    return {
        status,
        errorMessage,
        isCeo:user?.isCeo,
        isJournalist:user?.isJournalist,

        startLogin,
        startRegister,
        checkToken,
        startLogout
    }
}
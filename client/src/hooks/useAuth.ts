import { useAppSelector, useAppDispatch } from './hooks'; 
import { login,logout,checking,clearErrorMessage } from '../store/auth/authSlice';
import { journalApi } from '../api';
import { AxiosLoginResponse } from '../interfaces';


export const useAuth = () => {

    const dispatch = useAppDispatch();
    const { status } = useAppSelector((state) => state.auth);

    const startLogin = async(email:string, password:string):Promise<void> => {

        dispatch(checking());

        try{
            const { data }  = await journalApi.post<AxiosLoginResponse>('/auth/login', { email, password });
            if(data.ok){

                const { name,lastName,token,isCeo,isJournalist } = data;
                localStorage.setItem('x-token',token);
                localStorage.setItem('token-init-date',new Date().getTime().toString());
                dispatch(login({user:{name,lastName,token,isCeo,isJournalist}}));
                
            }
        }catch(error:any){
            dispatch(logout({errorMessage:error.response.data.msg}));
        }
    }

    return {
        status,

        startLogin
    }
}
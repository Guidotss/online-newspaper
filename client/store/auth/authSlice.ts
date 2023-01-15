import { createSlice } from '@reduxjs/toolkit'; 
import type { PayloadAction } from '@reduxjs/toolkit'; 
import { RootState } from '../store'; 


interface AuthState {
    status: string,
    uId: string | null,
    email: string | null,
    token: string |  null,
    name:string | null,
    errorMessage:object | null,
}


const initialState:AuthState = {
    status:'checking',
    uId:null,
    email:null,
    name:null,
    token:null,
    errorMessage:null,
}


export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state, {payload}) =>{
            state.status = 'authenticated';
            state.uId = payload.uId;
            state.email = payload.email;
            state.name = payload.name;
            state.errorMessage = null;
        },
        logout:(state, {payload}) =>{
            state.status = 'not-authenticated';
            state.uId = null;
            state.email = null;
            state.name = null;
            state.errorMessage = null;
            state.errorMessage = payload.errorMessage;
        },
        checking: ( state ) =>{
            state.status = 'checking';
        }
        
    }
}); 

export const { login, logout, checking } = AuthSlice.actions;
export default AuthSlice.reducer;
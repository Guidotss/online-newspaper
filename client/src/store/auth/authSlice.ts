import { createSlice } from '@reduxjs/toolkit'; 
import type { PayloadAction } from '@reduxjs/toolkit'; 
import { RootState } from '../store'; 
import { AuthState } from '../../interfaces'; 


const initialState:AuthState = {
    status:'checking',
    user:null,
    errorMessage:null,
}


export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state, {payload}) =>{
            state.status = 'authenticated';
            state.user = payload.user;
            state.errorMessage = null;
        },
        logout:(state, {payload}) =>{
            state.status = 'not-authenticated';
            state.user = null;
            state.errorMessage = payload?.errorMessage;
        },
        checking: ( state ) =>{
            state.status = 'checking';
        },
        clearErrorMessage: (state) =>{
            state.errorMessage = null;
        }
        
    }
}); 

export const { login, logout, checking } = AuthSlice.actions;
export default AuthSlice.reducer;
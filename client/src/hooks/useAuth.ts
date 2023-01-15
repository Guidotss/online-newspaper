import { useState } from 'react'; 
import { useAppSelector, useAppDispatch } from './hooks'; 
import { login,logout,checking } from '../store/auth/authSlice';


export const useAuth = () => {
    const dispatch = useAppDispatch();
    const { status } = useAppSelector((state) => state.auth);
}
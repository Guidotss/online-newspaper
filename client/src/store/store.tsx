import { configureStore } from '@reduxjs/toolkit'; 
import authReducer from './auth/authSlice';
import journalReducer from './journal/journalSlice';
import uiReducer from './ui/uiSlice';

export const store = configureStore({
    reducer:{
        auth: authReducer,
        journal: journalReducer,
        ui: uiReducer
    }
}); 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch; 

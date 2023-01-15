import { createSlice } from '@reduxjs/toolkit'; 
import type  { PayloadAction } from '@reduxjs/toolkit'; 
import { RootState } from '../store';


interface JournalState {
    news:object[],
    loading:boolean,
    errorMessage:object | null,
}

const initialState:JournalState = {
    news:[],
    loading:false,
    errorMessage:null,
}


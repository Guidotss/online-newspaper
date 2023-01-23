import { createSlice } from '@reduxjs/toolkit'; 
import type  { PayloadAction } from '@reduxjs/toolkit'; 
import { RootState } from '../store';
import { JournalState } from '../../interfaces'; 



const initialState:JournalState = {
    news:[],
    loading:false,
    errorMessage:null,
}

const journalSlice = createSlice({
    name:'journal',
    initialState,
    reducers:{}
}); 



export default journalSlice.reducer;





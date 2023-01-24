import { createSlice } from '@reduxjs/toolkit'; 
import type  { PayloadAction } from '@reduxjs/toolkit'; 
import { RootState } from '../store';
import { JournalState } from '../../interfaces'; 



const initialState:JournalState = {
    news:[],
    loading:false,
    errorMessage:null,
    imageLoading:false
}

const journalSlice = createSlice({
    name:'journal',
    initialState,
    reducers:{
        getNews(state,{payload}){
            state.news = payload;
            state.loading = false;
            state.errorMessage = payload?.errorMessage;
        },
        startLoading(state){
            state.loading = true;
        },
        startCreateNews(state,{payload}){
            state.news = payload;
            state.loading = false;
            state.errorMessage = payload?.errorMessage;
        },
        startUpdateNews(state,{payload}){
            state.news = payload;
            state.loading = false;
            state.errorMessage = payload?.errorMessage;
        },
        startDeleteNews(state,{payload}){
            state.news = payload;
            state.loading = false;
            state.errorMessage = payload?.errorMessage;
        },
        
        clearErrorMessage(state){
            state.errorMessage = null;
        },
        startLoadingImage(state){
            state.imageLoading = true;
        },
        fileUploaded(state,{payload}){
            state.imageLoading = false;
            state.errorMessage = payload?.errorMessage;
        }
    }
}); 



export const { getNews,startCreateNews,startUpdateNews, startDeleteNews,startLoading,clearErrorMessage,fileUploaded,startLoadingImage }  = journalSlice.actions;
export default journalSlice.reducer;





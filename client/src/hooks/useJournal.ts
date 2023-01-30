import { useAppDispatch, useAppSelector } from './hooks';
import { startCreateNews,startDeleteNews,startLoading,startUpdateNews,clearErrorMessage,getNews,fileUploaded,startLoadingImage } from '../store/journal/journalSlice';
import { AxiosJournalResponse } from '../interfaces';
import { journalApi } from '../api';
import { fileUpload } from '../helpers';
import { useState } from 'react';



export const useJournal = () => {

    const dispatch = useAppDispatch();
    const { loading, errorMessage,imageLoading,news } = useAppSelector((state) => state.journal);

    const startGetnews = async():Promise<void> => {
        dispatch(startLoading());

        try{
            const { data } = await journalApi.get<AxiosJournalResponse>('/');
            if(data.ok){
                dispatch(getNews(data));
                dispatch(clearErrorMessage());
            }
            

        }catch(error){
            console.log(error);
        }
    }

    const startUploadImage = async(file:File):Promise<void> => {
        
        dispatch(startLoadingImage());

        try{
            const resp = await fileUpload(file); 
            localStorage.setItem('image', JSON.stringify(resp));
            dispatch(fileUploaded(resp));
            dispatch(clearErrorMessage());
            

        }catch(error){
            console.log(error);
        }
    }

    

    const onCreateNews = async(title:string, content:string,category:string):Promise<void> => {
        dispatch(startLoading());

        let image = JSON.parse(localStorage.getItem('image')!);
        if(!image) throw new Error('No image selected');

        const news = {
            title,
            content,
            image,
            category
        }
        
        const token = localStorage.getItem('token');
        if(!token) throw new Error('No token found');
        
        try{

            const { data } = await journalApi.post('/create',news);
            if(data.ok){
                dispatch(startCreateNews(data));
                localStorage.removeItem('image');
                dispatch(clearErrorMessage());
                image=null;
            }

        }catch(error){
            console.log(error);
        }
    }


    const onUpdateNews = async( title?:string,content?:string, category?:string  ):Promise<void> => {
        
        dispatch(startLoading());

        const toke = localStorage.getItem('token');
        if(!toke) throw new Error('No token found');

        let image = JSON.parse(localStorage.getItem('image')!);

        try{
            const UpdatedNews = {
                title,
                content,
                image,
                category,
            }
            const newsId = localStorage.getItem('newsId');

            if(!title) delete UpdatedNews.title;
            if(!content) delete UpdatedNews.content;
            if(!image) delete UpdatedNews.image;
            if(!category) delete UpdatedNews.category;

            const { data } = await journalApi.put<AxiosJournalResponse>(`/edit/${newsId}`,UpdatedNews);

            if(data.ok){ 
                console.log(data)
                dispatch(startUpdateNews(data));
                dispatch(clearErrorMessage());
                localStorage.removeItem('image');
                localStorage.removeItem('newsId');
                image=null;
            }


        }catch(error){
            console.log(error);
        }
    }
    

    return{
        news,
        loading, 
        errorMessage,
        imageLoading,

        startGetnews,
        startUploadImage,
        onCreateNews,
        onUpdateNews
    }
}
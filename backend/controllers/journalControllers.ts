import { Request, Response } from 'express';
import { Journal } from '../services/journal';

const journal = new Journal();

export const getNews = async(_req: Request, res: Response):Promise<Response> => {
    try{
        const NewsData = await journal.getNews();
        return res.status(200).json({
            ok:true,
            NewsData
        });
        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            ok:false,
            msg:'Unexpected errror'
        });
    }
}


export const createNews = async(req:Request, res:Response):Promise<Response> => {
    try{
        const newNews = await journal.createNews(req.body);
        return res.status(201).json({
            ok:true,
            newNews
        });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            ok:false,
            msg:'Unexpected error'
        });
    }
}


export const editNews = async(req:Request, res:Response):Promise<Response> => {
    try{
        const editedNews = await journal.editNews(req.params.id, req.body);

        if(editedNews != null){
            return res.status(200).json({
                ok:true,
                editedNews
            });
        }else{
            return res.status(404).json({
                ok:false,
                msg:'News not found'
            });
        }

    }catch(err){
        console.log(err); 
        return res.status(500).json({
            ok:false,
            msg:'Unexpected error'
        });
    }
}


export const deleteNews = async (req:Request, res:Response):Promise<Response> => {
    try{

        const deletedNews = await journal.deleteNews(req.params.id)
        if(deletedNews != null){
            return res.status(200).json({
                ok:true,
                deletedNews
            });
        }else{
            return res.status(404).json({
                ok:false,
                msg:'News not found'
            })
        }

    }catch(err){
        console.log(err)
        return res.status(500).json({
            ok:false,
            msg:'Unexpected error'
        });
    }
}
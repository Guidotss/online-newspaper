import { News } from '../interfaces';
import journalModels from '../schema/journalSchema';

export class Journal {
    private model;
    constructor(){
        this.model = journalModels;
    }

    public async getNews(): Promise<News[] | undefined> {
        try{
            const news = await this.model.find();
            return news;
        }catch(err){
            console.log(err);
            throw new Error(`Error getting news: ${err}`);
        }
    }
    
    public async createNews(news:News):Promise<News | undefined>{
        try{

            if(JSON.stringify(news) ==='{}') throw new Error('News is requiered');

            const newNews = await this.model.create(news);
            return news;

        }catch(err){
            console.log(err);
            throw new Error(`an error has ocurred while creating a news: ${err}`)
            
        }
    } 

    public async editNews(id:string,newsEdited:News):Promise<News | null>{
        try{

            if(JSON.stringify(newsEdited) === '{}') throw new Error('News is required');

            const editedNews = this.model.findByIdAndUpdate(id, newsEdited,{new:true});
            return editedNews;

        }catch(err){
            console.log(err);
            throw new Error(`an error has ocurred while editing news: ${err} `);
        }
    }


    public async deleteNews(id:string):Promise<News | null>{
        try{
            const deletedNews = await this.model.findByIdAndDelete(id);
            return deletedNews;
        }catch(err){
            console.log(err);
            throw new Error(`an error has ocurred while deleting a news`);
        }
    }

}
import mongoose,{ model } from "mongoose";
import { News } from '../interfaces';

const journalSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

const journalModel = model<News>('News',journalSchema);
export default journalModel;

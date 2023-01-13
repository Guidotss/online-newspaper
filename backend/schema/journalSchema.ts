import mongoose,{ model } from "mongoose";
import { News } from '../interfaces';

const journalSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});

const journalModel = model<News>('News',journalSchema);
export default journalModel;

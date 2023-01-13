import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

interface Config {
    UrlAtlas: string,
    options: object
}

mongoose.set('strictQuery',true);

const config:Config = {
    UrlAtlas:`mongodb+srv://Guido:${process.env.DB_PASSWORD}@cluster0.tijy1to.mongodb.net/?retryWrites=true&w=majority`,
    options:{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
}

export default config;
import mongoose from 'mongoose';
import config from './config';


export const ConnectDB = async () => {
    try{
        mongoose.connect(config.UrlAtlas,config.options)
            .then(() => {
                console.log('DB connected');
            })
            .catch(err => {
                console.log(err);
                process.exit(1);
            })

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

ConnectDB();
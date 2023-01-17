import mongoose, { model } from "mongoose";
import { User } from '../interfaces'


const userSchema = new mongoose.Schema({
    name:{  
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isJournalist:{
        type:Boolean,
        required:true,
        default:false
    },
    isCeo:{
        type:Boolean,
        required:true,
        default:false
    }
});

const userModel = model<User>('User',userSchema);
export default userModel;


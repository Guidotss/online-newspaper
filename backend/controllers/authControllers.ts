
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv'; 
import { User } from '../services/user';
dotenv.config();

 


const user = new User();

export const registeUser = async(req:Request, res:Response):Promise<Response> => {
    try{

        const newUser = await user.register(req.body);

        if(!newUser){
            return res.status(400).json({
                ok:false,
                msg:'User already exist'
            });
        }else{
            
            if(process.env.JSON_SECRET === undefined){
                return res.status(500).json({
                    ok:false,
                    msg:'Unexpected error'
                });
            }
            const token = jwt.sign({id:newUser._id, name:newUser.name, lastName:newUser.lastName, email:newUser.email,isJournalist:newUser.isJournalist, isCeo:newUser.isCeo}, process.env.JSON_SECRET,{
                expiresIn:60*60*24
            }); 

            return res.status(201).json({
                ok:true,
                msg:'New user created',
                uid:newUser._id,
                name:newUser.name,
                lasName:newUser.lastName
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

export const loginUser = async(req:Request, res:Response):Promise<Response> => {
    try{

        const { email,password } = req.body;

        const userLogin = await user.login(email,password);

        if(!userLogin){
            return res.status(400).json({
                ok:false,
                msg:'User or password incorrect'
            });
        }else{

            if(process.env.JSON_SECRET === undefined){
                return res.status(500).json({
                    ok:false,
                    msg:'Unexpected error'
                });
            }
            const token = jwt.sign({id:userLogin._id, name:userLogin.name, lastName:userLogin.lastName, email:userLogin.email,isJournalist:userLogin.isJournalist, isCeo:userLogin.isCeo}, process.env.JSON_SECRET,{
                expiresIn:60*60*24
            }); 

            return res.status(200).json({
                ok:true,
                msg:'User logged',
                uid:userLogin._id,
                name:userLogin.name,
                lasName:userLogin.lastName,
                token
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


export const renewToken = async(req:Request, res:Response):Promise<Response> => {
    try{
        const { id,name, lastName, email, isJournalist, isCeo} = req.body;
        if(process.env.JSON_SECRET === undefined){
            return res.status(500).json({
                ok:false,
                msg:'Unexpected error'
            });
        }
        const token = jwt.sign({id,name, lastName, email,isJournalist, isCeo}, process.env.JSON_SECRET,{
            expiresIn:60*60*24
        });
        
        return res.status(200).json({
            ok:true,
            message:'Token renewed',
            token,
            id,
            name,
            lastName,
            isCeo,
            isJournalist
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            ok:false,
            msg:'Unexpected error'
        });
    }
}
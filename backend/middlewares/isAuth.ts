import { Request, Response, NextFunction } from 'express'; 
import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv';
import { User } from '../services/user'; 
dotenv.config();


export const isAuth = async(req:Request, res:Response, next:NextFunction) => {
    const user = new User(); 

    const token = req.header('x-token'); 

    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'Not token provider'
        });
    }else{
    
        try{

            if(process.env.JSON_SECRET === undefined){
                return res.status(500).json({
                    ok:false,
                    msg:'Unexpected error'
                }); 
            }

            const decodeToken = jwt.verify(token,process.env.JSON_SECRET); 
            const { id, name, lastName, email, isJournalist, isCeo } = decodeToken as any;

            req.body.id = id;
            req.body.name = name;
            req.body.lasname = lastName;
            req.body.email = email;
            req.body.isJournalist = isJournalist;
            req.body.isCeo = isCeo;
            

            const checkUser = await user.getUserById(id);

            if(!checkUser){
                return res.status(401).json({
                    ok:false,
                    msg:'Invalid token'
                });
            }
            next(); 

        }catch(err){
            console.log(err); 
            return res.status(500).json({
                ok:false,
                msg:'Unexpected error'
            }); 
        }
    }
}


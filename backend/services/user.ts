import bcrypt from 'bcrypt';
import userModel from '../schema/userSchema';
import { User as IUser } from './../interfaces/user';


export class User{
    private model

    constructor(){
        this.model = userModel
    }

    private encritpPassword(password:string):string{
        return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
    }
    private comparePassword(password:string, hash:string):boolean{
        return bcrypt.compareSync(password,hash)
    }

    public async register(user:IUser):Promise<IUser | null>{

        try{

            const checkUser = await this.model.findOne({email:user.email});

            if(checkUser){
                return null;
            }
            
            const newUser = new this.model({
                ...user,
                password:this.encritpPassword(user.password)
            });

            return await newUser.save(); 

        }catch(err){
            console.log(err);
            throw new Error(`An error has ocurred while creating a new user:${err}`);
        }
    }
    
    public async login(email:string,password:string):Promise<IUser | null>{
        try{
            const user = await this.model.findOne({email:email});
            if(!user || !this.comparePassword(password,user.password)){
                return null;
            }
            return user;
        }catch(err){
            console.log(err);
            throw new Error(`An error has ocurred while login user:${err}`);
        }
    }

    public async getUserById(id:string):Promise<IUser | null>{
        try{
            const user = await this.model.findById(id);
            if(!user){
                return null;
            }
            return user;
        }catch(err){
            console.log(err);
            throw new Error(`An error has ocurred while getting user by id:${err}`);
        }
    }

}
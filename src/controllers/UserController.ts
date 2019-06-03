import {Request, Response} from 'express'
import {User} from '../schemas/User'
import iController from './iController';
import { readConfigFile } from 'typescript';
import { ObjectID } from 'bson';
import mongoose from 'mongoose'

class UserController implements iController{
    
    public async create(req:Request, res:Response):Promise<Response>{
        try{
            const user = await User.create(req.body);
            return res.json(user);
        }catch(err){
            return res.status(400).send();
        }
    }

    public async list(req:Request, res:Response):Promise<Response>{
        try{
            const users = await User.find();        
            return res.json(users);
        }catch(err){
            return res.status(400).send();
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try{
            if(!req.params.id) return res.status(400).send();
            const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true});          
            return res.json(user);
        }catch(err){
            return res.status(404).send({error:"User not found"});
        }
        
    }
    public async delete(req: Request, res: Response): Promise<Response> {
        try{
            if(!req.params.id) return res.status(400).send();
            await User.findByIdAndDelete(req.params.id);
            return res.send();
        }catch(err){
            return res.status(404).send({error:"User not found"});
        }
        
    }
    public async findOne(req: Request, res: Response): Promise<Response> {
        
        try{
            if(!req.params.id) return res.status(400).send();
            const user = await User.findById(req.params.id);
            return res.json(user);
        }catch(err){
            return res.status(404).send();
        }
    }
    
}

export default new UserController();
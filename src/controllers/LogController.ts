import {Request, Response} from 'express'
import { Log } from '../schemas/Log';

class LogController{
    
    public async create(req:Request, res:Response):Promise<Response>{
        try{
            await Log.create(req.body);
            return res.send();
        }catch(err){
            console.log(err);
            return res.status(400).send();
        }
    }

    public async list(req:Request, res:Response):Promise<Response>{
        const {start, end} = req.params;
    
        try {
            const logs = await Log.find({
                date: {
                    $gt:  start,
                    $lt:  end
            }});
            
            return res.json(logs);
        } catch (error) {
            return res.status(400).send();
        }
    }

    
}

export default new LogController();
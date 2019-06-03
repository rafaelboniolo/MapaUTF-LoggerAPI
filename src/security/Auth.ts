import key from './key'
import { Request, Response, NextFunction } from 'express';

class Auth{
    public static async authenticate(req:Request, res:Response, next:NextFunction){
        
        if(!req.headers.authorization){
            console.log("Request rejected : No token provider");
            return res.status(401).json({err:"No token provider"});
        }
            
        if (key != req.headers.authorization){
            console.log("Request rejected : Token error");
            return res.status(401).json({err:"Token error"})
        }
        
        next();

    }
}

export default Auth;
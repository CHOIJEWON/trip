import ResponseGenerator from "../../utils/response";
import jwt, { TokenExpiredError } from 'jsonwebtoken'
import { Response, Request, NextFunction } from 'express';
import config from "../../config/auth";
import User from "../../models/user";

const catchError = (err: Error, res: Response) => {
    if(err instanceof TokenExpiredError) {
        return res.send(ResponseGenerator.genfalse(401, '토큰이 만료되었습니다'));
    }  
    return res.send(ResponseGenerator.genfalse(401, '올바르지 않은 토큰입니다'))
}

export const verifyToken = (req: Request, res: Response, next : NextFunction) => {
    let token = req.headers.authorization

    if(!token){
        return res.send(ResponseGenerator.genfalse(401, '토큰이 존재하지 않습니다'))
    }
    jwt.verify(token, config.accessSecret, (err, decoded) => {
        if(err){
            return catchError(err, res)
        }
        req.decodedUser = decoded as User
        next();
    })
}

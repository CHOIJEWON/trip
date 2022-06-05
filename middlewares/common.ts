import { NextFunction, Request, Response } from 'express';
import Guide from '../models/guide';
import GuideContent from '../models/guideContent';
import ResponseGenerator from '../utils/response';

export const catchGuideMe = async( req : Request, res : Response, next : NextFunction) => {
    const newUser = req.headers.authorization
    const guide = await Guide.findOne({ where : { id : req.params.id }})
    if( guide === null){
        return res.send(ResponseGenerator.genfalse(404, '해당 게시물은 존재하지 않습니다'))
    } else{
        if(newUser !== guide.userId){
            return res.send(ResponseGenerator.genfalse(400, '해당 게시물의 작성자가 아닙니다'))
        } else{
            next()
        }
    }
}

export const catchGuideContentMe = async( req : Request, res : Response, next : NextFunction) => {
    const newUser = req.headers.authorization
    const guide = await GuideContent.findOne({ where : { id : req.params.id }})
    if( guide === null){
        return res.send(ResponseGenerator.genfalse(404, '해당 게시물은 존재하지 않습니다'))
    } else{
        if(newUser !== guide.userId){
            return res.send(ResponseGenerator.genfalse(400, '해당 게시물의 작성자가 아닙니다'))
        } else{
            next()
        }
    }
}
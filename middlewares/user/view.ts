import { Request, Response, NextFunction } from 'express'
import viewModel from '../../models/view'
import ResponseGenerator from '../../utils/response'

export const viewPoint = async(req : Request, res : Response, next : NextFunction) => {

    const viewPoint = await viewModel.findOne({where : { guideId : req.params.id }})
    
    if(viewPoint === null ){
        return ResponseGenerator.genfalse(404, '게시물이 존재하지 않아요')
    } else {
        viewPoint.increment('viewPoint', {by : 1})
    }
    next()
}
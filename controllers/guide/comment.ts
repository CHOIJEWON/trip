import { Request, Response } from 'express'
import commentModel from '../../models/comment'
import { getAllComment } from '../../services/guide/comment'
import ResponseGenerator from '../../utils/response'

export const getComments = async(req: Request, res: Response) => {

    // const comments = await commentModel.findAll({ where : { id : req.params.reviewId }})

    // res.send(ResponseGenerator.genSuccess<commentModel[]>(comments))
    const response = getAllComment(req.params.id)
    res.send(response)
}

export const postComments = async(req: Request, res: Response) => {
    const data = { ...req.body, reviewId : req.params.reviewId, userId : req.decodedUser!.id }

    const comments = await commentModel.create(data)

    res.send(ResponseGenerator.genSuccess<commentModel>(comments))
}
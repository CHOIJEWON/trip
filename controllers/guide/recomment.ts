import { Request, Response } from 'express'
import { recommentPut, recomments, recommetDestroy } from '../../services/guide/recomment'

export const postRecomments = async(req : Request, res : Response) => {
    const response = await recomments(req.body, req.params.reviewId, req.params.commentId, {decodedUser : req.decodedUser!.id})
    res.send(response)
}

export const recommentUp = async(req : Request, res : Response) => {
    const response = await recommentPut(req.body, req.params.commentId)
    res.send(response)
}

export const recommentDel = async (req: Request, res: Response) => {
    const response = await recommetDestroy(req.params.commentId)
    res.send(response)
}
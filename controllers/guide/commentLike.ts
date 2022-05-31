import { Request, Response } from 'express';
import { commentLikeFunction, commetnDisLikeFunction } from '../../services/guide/commentLike';



export const commentLike = async( req: Request, res: Response) => {
    const response =  await commentLikeFunction(req.params.reviewId, {decodedUser : req.decodedUser!.id})
    res.send(response)
}

export const commentDisLike = async( req: Request, res: Response) => {
    const response = await commetnDisLikeFunction(req.params.reviewId, {decodedUser : req.decodedUser!.id})
    res.send(response)
}



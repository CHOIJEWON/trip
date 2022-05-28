import { Request, Response } from 'express';
import { disLikefunction, likefunction } from '../../services/guide/like';


export const Like = async( req: Request, res: Response) => {
    const response =  await likefunction(req.params.id, {decodedUser : req.decodedUser!.id})
    res.send(response)
}

export const disLike = async( req: Request, res: Response) => {
    const response = await disLikefunction(req.params.id, {decodedUser : req.decodedUser!.id})
    res.send(response)
}

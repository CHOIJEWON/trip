import { Request, Response } from 'express'
import { deleteCommet, getAllComment, postingComment, updatingComment } from '../../services/guide/comment'


export const getComments = async(req: Request, res: Response) => {
    const response = await getAllComment(req.params.reviewId)
    res.send(response);
}

export const postComments = async(req: Request, res: Response) => {
    const response = await postingComment(req.body, req.params.reviewId, {decodedUser : req.decodedUser!.id})
    res.send(response)
}

export const updateComment = async(req: Request, res: Response) => {
    const response = await updatingComment(req.body, req.params.reviewId)
    res.send(response)
}

export const delComment = async (req: Request, res: Response) => {

    const response = await deleteCommet(req.params.reviewId)
    res.send(response)
}
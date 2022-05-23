import { Request, Response } from 'express';
import { deletingReview, guideReviews, postingReviews, updatingReview } from '../../services/guide/review';


export const getReviews = async(req : Request, res : Response) => {
    const response = await guideReviews(req.params.guideId)
    res.send(response);
}

export const postReviews = async(req : Request, res : Response) => {
    const response = await postingReviews(req.body, req.params.guideId, {decodedUser : req.decodedUser!.id})
    res.send(response);
}   

export const updateReview = async(req : Request, res : Response) => {
    const response = await updatingReview(req.body, req.params.guideId);
    res.send(response);
}   

export const deleteReview = async(req : Request, res : Response) => {
    const response = await deletingReview(req.params.guideId);
    res.send(response);
}
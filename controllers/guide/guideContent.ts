import { Request, Response } from "express"
import { guideContentDelete, guideContentGet, guideContentPost, guideContentUpdate } from "../../services/guide/guideContent"

export const contentGet = async (req : Request, res : Response) => {
    const response = await guideContentGet(req.params.id)
    res.send(response)
} 

export const contentPost = async(req : Request, res : Response) => {
    const response = await guideContentPost( req.body, req.body.imgs, req.body.courses, {decodedUser : req.decodedUser!.id})
    res.send(response);
}

export const contentPut =  async (req : Request, res : Response) => {
    const updateGuidePost = await guideContentUpdate(req.body, req.params.id, req.body.imgs, req.body.courses)
    res.send(updateGuidePost)
}

export const contentDel = async(req : Request, res : Response) => {
    const guideContentDel = await guideContentDelete(req.params.id)
    res.send(guideContentDel)
}

import { Request, Response } from "express"
import { createGuidePost, deleteGuidePost, getGuideList, updateGuidePost } from "../../services/guide/guide";

export const getGuide  = async(req : Request , res : Response) => {
    const guide = await getGuideList();
    res.send(guide)
}

export const postGuide =  async (req : Request, res : Response) => {
    const guideCreate = await createGuidePost(req.body)
    res.send(guideCreate)
};


export const updateGuide = async (req : Request, res : Response) => {
    const guideUpdate = await updateGuidePost(req.params.id, req.body);
    res.send(guideUpdate);
}

export const delGuide = async(req : Request, res : Response) => { //APIParam path에 blank 
    const response = await deleteGuidePost(req.params.id)
    res.send(response)
}
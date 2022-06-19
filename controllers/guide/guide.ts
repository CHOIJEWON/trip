import { Request, Response } from "express"
import { createGuidePost, deleteGuide, getGuideList, guideFindOne, update} from "../../services/guide/guide";

export const getGuide  = async(req : Request , res : Response) => {
    const guide = await getGuideList();
    res.send(guide)
}

export const guideOne = async(req : Request , res : Response) => {
    const response = await guideFindOne(req.params.id)
    res.send(response)
}

export const postGuide =  async (req : Request, res : Response) => {
    const guideCreate = await createGuidePost(req.body, {decodedUser : req.decodedUser!.id}, req.body.contents, req.body.imgs, req.body.courses)
    res.send(guideCreate)
};


export const updateGuide = async (req : Request, res : Response) => {
    const guideUpdate = await update(req.params.id, req.body)
    res.send(guideUpdate);
}

export const delGuide = async(req : Request, res : Response) => { 
    const response = await deleteGuide(req.params.id)
    res.send(response)
}
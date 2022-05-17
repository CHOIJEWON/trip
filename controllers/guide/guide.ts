import { Request, Response } from "express"
import Guide from "../../models/guide";
import { createGuidePost, deleteGuidePost, getGuideList, updateGuidePost } from "../../services/guide/guide";
import { GuideDetails, Guide as GuideKey } from "../../types/guide";
import ResponseGenerator from "../../utils/response";



export const getGuide  = async(req : Request , res : Response) => {
    const guide = await getGuideList();
    const response = ResponseGenerator.genSuccess<GuideKey[]>(guide)
    res.send(response)
}

export const postGuide =  async (req : Request, res : Response) => {
    const guideCreate = await createGuidePost(req.body)
    const response = ResponseGenerator.genSuccess<GuideDetails>(guideCreate)
    res.send(response)
};


export const updateGuide = async (req : Request, res : Response) => {
    const guideUpdate = await updateGuidePost(req.params.id, req.body) 
    let response = null

    if(guideUpdate !== null){
        response = ResponseGenerator.genSuccess<GuideKey>(guideUpdate)
    } else {
        response = ResponseGenerator.genfalse(400, '잘못된 요청입니다');
    }

    res.send(response)
}

export const delGuide = async(req : Request, res : Response) => { //APIParam path에 blank 
    const response = await deleteGuidePost(req.params.id)
    res.send(response)
}
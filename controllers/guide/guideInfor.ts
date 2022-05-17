// import { Request, Response } from "express"
// import { guideContentDelete, guideContentGet, guideContentPost, guideContentUpdate } from "../../services/guide/guideContent"
// import { GuideContentDetails, GuideContent as GuideContentKey } from "../../types/guide"
// import { GuideContentImg, GuideContentImgKey } from '../../types/response/guideContentImg'
// import ResponseGenerator from "../../utils/response"



// export const contentGet = async (req : Request, res : Response) => {
//     const response = await guideContentGet()
//     ResponseGenerator.genSuccess<GuideContentImgKey[]>(response)
//     res.send(response)
// } 

// export const contentPost = async(req : Request, res : Response) => {
//     const response = await guideContentPost(req.body, req.body.imgs)
//     ResponseGenerator.genSuccess<GuideContentImgKey>(response)
//     res.send(response);
// }

// export const contentPut =  async (req : Request, res : Response) => {
//         let response = null    
//         const updateGuidePost = await guideContentUpdate(req.body, req.params.id, req.body.imgs)
        
//         if( updateGuidePost !== null){
//             response = ResponseGenerator.genSuccess<GuideContentKey>(updateGuidePost)
//         } else {
//             response = ResponseGenerator.genfalse(400, '업데이트 불가능')
//         }
//         res.send(response)
//     }

// export const contentDel = async(req : Request, res : Response) => {
//     let response = null
//     const guideContentDel = await guideContentDelete(req.params.id)

//     if(guideContentDel !== null){
//         response = ResponseGenerator.genSuccess<GuideContentKey>(guideContentDel)
//     }else{
//         response = ResponseGenerator.genfalse(400, '컨텐츠 삭제 error')
//     }
//     res.send(response)
// }

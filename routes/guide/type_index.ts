// import express, {Router} from 'express';
// import Guide from '../../models/guide'
// import { GuideDetails, Guide as GuideKey, GuideContentDetails, GuideContent as GuideContentKey } from '../../types/guide'
// import GuideContent from '../../models/guideContent';
// import { APIParam, Empty } from '../../types/common'
// import { APIResponse } from '../../types/response';
// import { updateGuide } from '../../controllers/guide/guide';


// const router = Router();

// router.get<Empty, APIResponse<GuideKey[]>, Empty, Empty>('/', );

// router.post<Empty, APIResponse<GuideDetails>, GuideDetails, Empty>('/', async (req, res) => {
//     const guidePost = await Guide.create(req.body)
//     const response = {
//         status : 200,
//         message : 'success',
//         data : guidePost,
//     }
//     res.send(response);
// });

// router.put<APIParam, APIResponse<GuideKey|null>, GuideDetails, Empty>('/:id', updateGuide);

// router.delete<APIParam, APIResponse<GuideKey | null >, Empty, Empty>('/:id', async(req, res) => { //APIParam path에 blank 
//     const guide = await Guide.findByPk(req.params.id)
//     if (guide === null){
//         const response = {
//             status : 404,
//             message : 'faile',
//             data : null,
//         }
//         res.status(404);
//         res.send(response);    
//     } else {
//         await guide.destroy() 
//         const response = {
//             status : 204,
//             message : 'success',
//             data : guide,
//         } 
//         res.send(response);
//     } 
// })




// router.get<Empty, APIResponse<GuideContentKey[]>, Empty, Empty>('/content', async (req, res) => {
//     const guidecontent : GuideContentKey[] = await GuideContent.findAll({})
//     const response = {
//         status: 200,
//         message : 'success',
//         data : guidecontent,
//     }
//     res.send(response)
// });

// router.post<Empty, APIResponse<GuideContentKey>, GuideContentDetails, Empty>('/content', async(req, res) => {
//     const guideContentPost = await GuideContent.create(req.body)
//     const response = {
//         status : 200,
//         message : 'success',
//         data : guideContentPost
//     }
//     res.send(response)
// })

// router.put<APIParam, APIResponse<GuideContentKey | null>, GuideContentDetails, Empty>('/content/:id', async (req, res) => {
//     const guideContentKeyFind = await GuideContent.findByPk(req.params.id)
//     if(guideContentKeyFind === null){
//         const response = {
//             status: 404,
//             message : 'faile',
//             data : null
//         }
//         res.status(404).send(response);
//     } else {
//         const guideContentUpdate = await guideContentKeyFind.update(req.body)
//         const response = {
//             status : 200, 
//             message : 'success', 
//             data : guideContentUpdate
//         }
//         res.send(response);
//     }
// })

// router.delete<APIParam, APIResponse<GuideContentKey | null>, Empty, Empty>('/content/:id', async(req, res) => {
//     const guideContentKeyFind = await GuideContent.findByPk(req.params.id)
//     if(guideContentKeyFind === null){
//         const response = {
//             status: 404,
//             message : 'faile',
//             data : null
//         }
//         res.status(404).send(response);
//     } else {
//         await guideContentKeyFind.destroy()
//         const response = {
//             status : 200, 
//             message : 'success', 
//             data : guideContentKeyFind
//         }
//         res.send(response);
//     }
// })



// export default router;
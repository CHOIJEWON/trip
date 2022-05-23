// import commentModel from '../../models/comment'
// import ResponseGenerator from '../../utils/response'

// export {Request, Response} from 'express'



// export const postRecomments = async(req: Request, res: Response) => {
//     const data = {
//         ...req.body,
//         reviewId : req.params.reviewId,
//         reCommentId : req.params.commentId,
//         userId : req.decodedUser!.id
//     }

//     const createRecomment = await commentModel.create(data)

//     ResponseGenerator.genSuccess<commentModel>(createRecomment)
// }
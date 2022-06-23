import commentModel from "../../models/comment"
import Review from "../../models/review"
import { CommentDetails } from "../../types/comment"
import { decodedUser } from "../../types/response/user"
import ResponseGenerator from "../../utils/response"

export const getAllComment = async(key : string) => {
    const comments = await commentModel.findAll({
        where : [{ 
            reviewId : key,
            commentId : null,
        }],
        include : [
            {
            model : commentModel,
            as : 'Recomment'
        },
    ]
})
    return ResponseGenerator.genSuccess<commentModel[]>(comments)
}

export const postingComment = async(body : CommentDetails, key : string, user : decodedUser) => {
    const find = await Review.findOne({ where : { id : key }})
    if(find === null){
        return ResponseGenerator.genfalse(404, '해당 리뷰가 존재하지 않습니다')
    } else {
        const commentCreate = await commentModel.create({
            ...body,
            reviewId : key, 
            userId : user.decodedUser 
        })
        return ResponseGenerator.genSuccess<commentModel>(commentCreate)
    }
    
}

export const updatingComment = async(body : CommentDetails, key : string, ) => {
    const findComment = await commentModel.findOne({ where : { id : key }})
    if(findComment === null){
        return ResponseGenerator.genfalse(404, '존재하지 않는 댓글입니다')
    } else {
    const commentUpdate = await findComment.update(body)
        return ResponseGenerator.genSuccess<commentModel>(commentUpdate)
    }
}

export const deleteCommet = async(key : string) => {
    const findReview = await commentModel.findOne({ where : { id : key} })
    if(findReview === null) {
        return ResponseGenerator.genfalse(404, '존재하지 않는 댓글입니다')
    } else {
        await findReview.destroy()
        return ResponseGenerator.genSuccess<commentModel>(findReview)
    }
}

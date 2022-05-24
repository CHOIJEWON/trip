import commentModel from "../../models/comment"
import { decodedUser } from "../../types/response/user"
import ResponseGenerator from "../../utils/response"


export const recomments = async(body : commentModel, reviewKey : string, commentKey : string, user : decodedUser ) => {
    const data = {
        ...body,
        reviewId : reviewKey,
        commentId : commentKey,
        userId : user.decodedUser
    }
    const createRecomment = await commentModel.create(data)
    return ResponseGenerator.genSuccess<commentModel>(createRecomment)
}

export const recommentPut = async(data : commentModel, commentKey : string) => {
    const recomment = await commentModel.findOne({ where : { id : commentKey }})
    if(recomment === null){
        return ResponseGenerator.genfalse(500, '업데이트 불가능')
    } else {
    const recommentUpdating = await recomment.update(data)
        return ResponseGenerator.genSuccess<commentModel>(recommentUpdating)
    }
}

export const recommetDestroy = async(commentKey : string) => {
    const recomment = await commentModel.findOne({ where : { id : commentKey }})
    if(recomment === null){
        return ResponseGenerator.genfalse(500, '삭제 불가능')
    } else {
    await recomment.destroy()
        return ResponseGenerator.genSuccess<commentModel>(recomment)
    }
} 
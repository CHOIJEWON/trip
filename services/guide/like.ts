import Guide from "../../models/guide"
import LikeModel from "../../models/like"
import { decodedUser } from "../../types/response/user"
import ResponseGenerator from "../../utils/response"

export const likefunction = async( key : string, user : decodedUser) => {
    const like = await LikeModel.findOne({
        where : { guideId : key , userId : user.decodedUser }
    })
    const guide = await Guide.findOne({
        where : { id : key }
    })
    if( guide === null){
        return ResponseGenerator.genfalse(404, '해당 guide는 존재하지 않습니다')
    } else {
        if( like === null ){
            const likePoint = await LikeModel.create({
                guideId : key,
                userId : user.decodedUser,
                isLike : true
            })
            guide.increment('likePoint' , { by : 1}) 
            return ResponseGenerator.genSuccess<LikeModel>(likePoint)
        } else {
            if( like.isLike === true){
                await like.destroy()
                guide.decrement('likePoint', { by : 1 })
                return ResponseGenerator.genSuccess<LikeModel>(like)
            } else {
                await like.update({ isLike : true })
                guide.decrement('disLikePoint', { by : 1})
                guide.increment('likePoint', { by : 1})
                return ResponseGenerator.genSuccess<LikeModel>(like)
            }
        }
    }
}


export const disLikefunction = async( key : string, user : decodedUser ) => {
    const like = await LikeModel.findOne({
        where : { guideId : key , userId : user.decodedUser }
    })
    const guide = await Guide.findOne({
        where : { id : key }
    })
    if( guide === null){
        return ResponseGenerator.genfalse(404, '해당 guide는 존재하지 않습니다')
    } else {
        if( like === null ){
            const likePoint = await LikeModel.create({
                guideId : key,
                userId : user.decodedUser,
                isLike : false
            })
            guide.increment('disLikePoint' , { by : 1}) 
            return ResponseGenerator.genSuccess<LikeModel>(likePoint)
        } else {
            if( like.isLike === false){
                await like.destroy()
                guide.decrement('disLikePoint', { by : 1 })
                return ResponseGenerator.genSuccess<LikeModel>(like)
            } else {
                await like.update({ isLike : false })
                guide.decrement('likePoint', { by  : 1})
                guide.increment('disLikePoint', { by : 1})
                return ResponseGenerator.genSuccess<LikeModel>(like)
            }
        }
    }
}

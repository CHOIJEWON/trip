import LikeModel from "../../models/like"
import ReviewModel from "../../models/review"
import { decodedUser } from "../../types/response/user"
import ResponseGenerator from "../../utils/response"

export const commentLikeFunction = async( key : string, user : decodedUser) => {
    const like = await LikeModel.findOne({
        where : { guideId : key , userId : user.decodedUser }
    })
    const review = await ReviewModel.findOne({
        where : { id : key }
    })
    if( review === null){
        return ResponseGenerator.genfalse(404, '해당 review는 존재하지 않습니다')
    } else {
        if( like === null ){
            const likePoint = await LikeModel.create({
                reviewId : key,
                userId : user.decodedUser,
                isLike : true
            })
            review.increment('likePoint' , { by : 1}) 
            return ResponseGenerator.genSuccess<LikeModel>(likePoint)
        } else {
            if( like.isLike === true){
                await like.destroy()
                review.decrement('likePoint', { by : 1 })
                return ResponseGenerator.genSuccess<LikeModel>(like)
            } else {
                await like.update({ isLike : true })
                review.decrement('disLikePoint', { by : 1})
                review.increment('likePoint', { by : 1})
                return ResponseGenerator.genSuccess<LikeModel>(like)
            }
        }
    }
}


export const commetnDisLikeFunction = async( key : string, user : decodedUser ) => {
    const like = await LikeModel.findOne({
        where : { guideId : key , userId : user.decodedUser }
    })
    const review = await ReviewModel.findOne({
        where : { id : key }
    })
    if( review === null){
        return ResponseGenerator.genfalse(404, '해당 guide는 존재하지 않습니다')
    } else {
        if( like === null ){
            const likePoint = await LikeModel.create({
                guideId : key,
                userId : user.decodedUser,
                isLike : false
            })
            review.increment('disLikePoint' , { by : 1}) 
            return ResponseGenerator.genSuccess<LikeModel>(likePoint)
        } else {
            if( like.isLike === false){
                await like.destroy()
                review.decrement('disLikePoint', { by : 1 })
                return ResponseGenerator.genSuccess<LikeModel>(like)
            } else {
                await like.update({ isLike : false })
                review.decrement('likePoint', { by  : 1})
                review.increment('disLikePoint', { by : 1})
                return ResponseGenerator.genSuccess<LikeModel>(like)
            }
        }
    }
}

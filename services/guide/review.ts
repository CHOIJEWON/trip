import { Op } from "sequelize/types"
import commentModel from "../../models/comment"
import Guide from "../../models/guide"
import ReviewModel from "../../models/review"
import { decodedUser, Userkey } from "../../types/response/user"
import { reviewDetails } from "../../types/review"
import ResponseGenerator from "../../utils/response"

export const guideReviews = async(key : string) => {
    const review = await ReviewModel.findAll({ 
        where : { guideId : key  }
    })
    return ResponseGenerator.genSuccess<ReviewModel[]>(review)
}


export const postingReviews = async(body : reviewDetails, key : string, user : decodedUser) => {
     const findGuide = await Guide.findOne({ where : { id : key } })
    if(findGuide === null){
        return ResponseGenerator.genfalse(404, '존재하지 않는 가이드입니다')
    } else {
        const review = await ReviewModel.create({
            ...body,
            guideId : key,
            userId : user.decodedUser
        })
        return ResponseGenerator.genSuccess<ReviewModel>(review)
    }
}

export const updatingReview = async(body : reviewDetails, key : string) => {
    const findReview = await ReviewModel.findOne({ where : { id : key } })
    if(findReview === null) {
        return ResponseGenerator.genfalse(404, '존재하지 않는 리뷰입니다')
    } else {
        const updateReview = await findReview.update(body)
        return ResponseGenerator.genSuccess<ReviewModel>(updateReview)
    }  
}

export const deletingReview = async(key : string) => {
    const findReview = await ReviewModel.findOne({ where : { id : key } })
    if(findReview === null) {
        return ResponseGenerator.genfalse(404, '존재하지 않는 리뷰입니다')
    } else {
        await findReview.destroy()
        return ResponseGenerator.genSuccess<ReviewModel>(findReview)
    }
}
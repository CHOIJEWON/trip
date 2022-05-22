import ReviewModel from "../../models/review"
import { decodedUser } from "../../types/response/user"
import ResponseGenerator from "../../utils/response"

export const guideReviews = async(key : string) => {
    const review = await ReviewModel.findAll({ where : { guideId : key } })
    return ResponseGenerator.genSuccess<ReviewModel[]>(review)
}

export const postingReviews = async(body : ReviewModel, key : string, user : decodedUser) => {
    const data = {...body, key, user}
    const review = await ReviewModel.create(data)
    return ResponseGenerator.genSuccess<ReviewModel>(review)
}

export const updatingReview = async(body : ReviewModel, key : string) => {
    const findReview = await ReviewModel.findOne({ where : { id : key } })
    if(findReview === null) {
        return ResponseGenerator.genfalse(404, '존재하지 않는 댓글입니다')
    } else {
        const updateReview = await findReview.update(body)
        return ResponseGenerator.genSuccess<ReviewModel>(updateReview)
    }  
}

export const deletingReview = async(key : string) => {
    const findReview = await ReviewModel.findOne({ where : { id : key } })
    if(findReview === null) {
        ResponseGenerator.genfalse(404, '존재하지 않는 댓글입니다')
    } else {
        await findReview.destroy()
        return ResponseGenerator.genSuccess<ReviewModel>(findReview)
    }
}
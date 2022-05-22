import commentModel from "../../models/comment"
import ResponseGenerator from "../../utils/response"

export const getAllComment = async(key : string) => {
    const comments = await commentModel.findAll({
        where : { guideId : key},
        include : [
            {
            model : commentModel,
            foreignKey : 'commentId'
        },
    ]
})
    return ResponseGenerator.genSuccess<commentModel[]>(comments)
}


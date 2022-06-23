import { postingComment } from "../../services/guide/comment"
import { readyReviewCreate } from "./review"


export const readyCommentWrite = async() => {
    const sign = await readyReviewCreate()

    const data = {
        content : '댓글입니다'
    }

    await postingComment(data, '1', {decodedUser : sign})
}
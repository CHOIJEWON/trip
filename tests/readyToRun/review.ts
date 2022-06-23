import { postingReviews } from "../../services/guide/review"
import { readyGuideWrite } from "./guide"

export const readyReviewCreate = async() => {
    const exData = await readyGuideWrite()

    const data = {
        content : "review입니다",
        imgURL : "imgURL1",
    }

    await postingReviews(data, '1', { decodedUser : exData})
    return exData
}
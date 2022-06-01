import guideDisLike from "./post-disLike"
import guideLike from "./post-like"

const guideIsLike = {
    '/guide/{guideId}/like' : {
        ...guideLike
    },
    '/guide/{guideId}/Dislike' : {
        ...guideDisLike
    }
}

export default guideIsLike
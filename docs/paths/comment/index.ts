import delComment from "./delete-commet";
import getComment from "./get-comment";
import createComment from "./post-comment";
import putComment from "./put-comment";

const comment = {
    '/guide/{reviewId}/comment' : {
       ...createComment,
       ...getComment,
    },
    '/guide/{commentId}/comment' : {
        ...putComment,
        ...delComment
    }
}

export default comment;
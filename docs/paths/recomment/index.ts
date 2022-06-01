import delRecomment from "./delete-recomment";
import createRecomment from "./post-recomment";
import putRecomment from "./put-recommet";


const recomment = {
    '/guide/{reviewId}/{commetId}/recomment' : {
       ...createRecomment,
       ...putRecomment,
       ...delRecomment,
    },
}

export default recomment;
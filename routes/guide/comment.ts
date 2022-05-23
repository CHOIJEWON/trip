import {Router} from 'express';
import { verifyToken } from '../../middlewares/user';
import { getReviews, postReviews,  } from '../../controllers/guide/review';
import { delComment, getComments, postComments, updateComment } from '../../controllers/guide/comment';



const router = Router();


router.get(
    '/:reviewId/comment',
    getComments,
)

router.post(
    '/:reviewId/comment',
    verifyToken,
    postComments,
)

router.put( 
    '/:reviewId/comment',
    verifyToken,
    updateComment,
)

router.delete( 
    '/:reviewId/comment',
    delComment,
    verifyToken,
)



export default router;
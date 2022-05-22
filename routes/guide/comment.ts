import {Router} from 'express';
import { verifyToken } from '../../middlewares/user';
import { getReviews, postReviews,  } from '../../controllers/guide/review';
import { getComments, postComments } from '../../controllers/guide/comment';



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

export default router;
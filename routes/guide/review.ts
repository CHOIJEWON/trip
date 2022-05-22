import {Router} from 'express';
import { verifyToken } from '../../middlewares/user';
import { deleteReview, getReviews, postReviews, updateReview,  } from '../../controllers/guide/review';

const router = Router();

router.get(
    '/:guideId/review',
    getReviews 
    )

router.post(
    '/:guideId/review',
    verifyToken,
    postReviews
)

router.put(
    '/:guideId/review',
    verifyToken,
    updateReview
)

router.delete(
    '/:guideId/review',
    verifyToken,
    deleteReview,
)
export default router;
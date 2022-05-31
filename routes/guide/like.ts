import {Router} from 'express';
import { verifyToken } from '../../middlewares/user';
import { disLike, Like } from '../../controllers/guide/like';
import { commentLike } from '../../controllers/guide/commentLike';


const router = Router();

router.post(
    '/:guideId/like',
    verifyToken,
    Like,
)

router.post(
    '/:guideId/disLike',
    verifyToken,
    disLike,
)

router.post(
    '/review/:reviewId/like',
    verifyToken,
    commentLike,
)

export default router;


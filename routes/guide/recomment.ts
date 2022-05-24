import {Router} from 'express';
import { verifyToken } from '../../middlewares/user';
import { postRecomments, recommentDel, recommentUp } from '../../controllers/guide/recomment';

const router = Router();

router.post(
    '/:reviewId/:commentId/recomment',
    verifyToken,
    postRecomments,
)

router.put(
    '/:reviewId/:commentId/recomment',
    verifyToken,
    recommentUp,
)

router.delete(
    '/:reviewId/:commentId/recomment',
    verifyToken,
    recommentDel,
)

export default router;


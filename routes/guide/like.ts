import {Router} from 'express';
import { verifyToken } from '../../middlewares/user';
import { disLike, Like } from '../../controllers/guide/like';


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


export default router;


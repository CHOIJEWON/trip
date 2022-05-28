import {Router} from 'express';
import { verifyToken } from '../../middlewares/user';
import { disLike, Like } from '../../controllers/guide/like';

const router = Router();

router.post(
    '/:id/like',
    verifyToken,
    Like,
)

router.post(
    '/:id/disLike',
    verifyToken,
    disLike,
)

export default router;


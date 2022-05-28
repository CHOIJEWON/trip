import {Router} from 'express';
import { delGuide, getGuide, guideOne, postGuide, updateGuide } from '../../controllers/guide/guide';
import GuideValidator from '../../middlewares/guide/guide';
import { errorhandler } from '../../middlewares/errorhandler';
import { verifyToken } from '../../middlewares/user';
import { viewPoint } from '../../middlewares/user/view';

const router = Router();

router.get(
    '/', 
    getGuide
);

router.get(
    '/:id',
    viewPoint,
    guideOne
)

router.post(
    '/',
    verifyToken,
    GuideValidator.valTitleUnique(),
    GuideValidator.valCategory(),
    errorhandler,
    postGuide,
    );

router.put(
    '/:id', 
    GuideValidator.valIdExist(),
    GuideValidator.valCategory(),
    errorhandler,
    updateGuide,
    );

router.delete(
    '/:id', 
    GuideValidator.valIdExist(),
    errorhandler,
    delGuide,
    )

export default router;
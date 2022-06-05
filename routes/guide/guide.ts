import {Router} from 'express';
import { delGuide, getGuide, guideOne, postGuide, updateGuide } from '../../controllers/guide/guide';
import GuideValidator from '../../middlewares/guide/guide';
import { errorhandler } from '../../middlewares/errorhandler';
import { verifyToken } from '../../middlewares/user';
import { viewPoint } from '../../middlewares/user/view';
import { catchGuideMe} from '../../middlewares/common';
import { valAdmin, valWriter } from '../../middlewares/user/role';

const router = Router();

router.get(
    '/', 
    getGuide
);

router.get(
    '/:id',
    GuideValidator.valIdExist(),
    errorhandler,
    viewPoint,
    guideOne
)

router.post(
    '/',
    verifyToken,
    GuideValidator.valTitleUnique(),
    GuideValidator.valCategory(),
    valAdmin,
    valWriter,
    errorhandler,
    postGuide,
    );

router.put(
    '/:id', 
    GuideValidator.valIdExist(),
    GuideValidator.valCategory(),
    errorhandler,
    catchGuideMe,
    valAdmin,
    updateGuide,
    );

router.delete(
    '/:id', 
    GuideValidator.valIdExist(),
    errorhandler,
    catchGuideMe,
    valAdmin,
    delGuide,
    )

export default router;
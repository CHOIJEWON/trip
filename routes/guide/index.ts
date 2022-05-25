import {Router} from 'express';
import { delGuide, getGuide, guideOne, postGuide, updateGuide } from '../../controllers/guide/guide';
import { contentDel, contentGet, contentPost, contentPut } from '../../controllers/guide/guidecontent';
import GuideValidator from '../../middlewares/guide/guide';
import GuideContentValidator from '../../middlewares/guide/guideContent';
import { errorhandler } from '../../middlewares/errorhandler';
import { signIn } from '../../controllers/user/user';
import { verifyToken } from '../../middlewares/user';
import commentRouter from './comment';
import reviewRouter from './review';
import recommentRouter from './recomment'
import { viewPoint } from '../../middlewares/user/view';
// import guideContentRouter from './guideContent'


const router = Router();

// guide router
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

// content router

router.get(
    '/content',
    GuideContentValidator.valGuideContentBlankData(),
    errorhandler,
    contentGet
    );
    
    router.post('/content', 
    GuideContentValidator.valGuideContentTitleBlank(),
    GuideContentValidator.valGuideContentContentBlank(),
    errorhandler,
    contentPost
    );
    
    router.put(
    '/content/:id', 
    GuideContentValidator.valGuideContentExist(), 
    errorhandler,
    contentPut
    );
    
    
    router.delete(
    '/content/:id', 
    GuideContentValidator.valGuideContentExist(), 
    errorhandler,
    contentDel
    );

router.use('/review', commentRouter);
router.use('', reviewRouter);
router.use('/review', recommentRouter);
// router.use('', guideContentRouter)



export default router;
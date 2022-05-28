import {Router} from 'express';
import { contentDel, contentGet, contentPost, contentPut } from '../../controllers/guide/guidecontent';
import GuideContentValidator from '../../middlewares/guide/guideContent';
import { delGuide, getGuide, guideOne, postGuide, updateGuide } from '../../controllers/guide/guide';
import GuideValidator from '../../middlewares/guide/guide';
import { errorhandler } from '../../middlewares/errorhandler';
import { verifyToken } from '../../middlewares/user';
import { viewPoint } from '../../middlewares/user/view';
import commentRouter from './comment';
import reviewRouter from './review';
import recommentRouter from './recomment'
import likeRouter from './like';
import contentRouter from './guideContent'
import guideRouter from './guide'



const router = Router();

// router.get(
//     '/content',
//     GuideContentValidator.valGuideContentBlankData(),
//     errorhandler,
//     contentGet
//     );
    
//     router.post('/content', 
//     GuideContentValidator.valGuideContentTitleBlank(),
//     GuideContentValidator.valGuideContentContentBlank(),
//     errorhandler,
//     verifyToken,
//     contentPost
//     );
    
//     router.put(
//     '/content/:id', 
//     GuideContentValidator.valGuideContentExist(), 
//     errorhandler,
//     verifyToken,
//     contentPut
//     );
    
    
//     router.delete(
//     '/content/:id', 
//     GuideContentValidator.valGuideContentExist(), 
//     errorhandler,
//     verifyToken,
//     contentDel
//     );


// router.get(
//     '/', 
//     getGuide
// );

// router.get(
//     '/:id',
//     viewPoint,
//     guideOne
// )

// router.post(
//     '/',
//     verifyToken,
//     GuideValidator.valTitleUnique(),
//     GuideValidator.valCategory(),
//     errorhandler,
//     postGuide,
//     );

// router.put(
//     '/:id', 
//     GuideValidator.valIdExist(),
//     GuideValidator.valCategory(),
//     errorhandler,
//     updateGuide,
//     );

// router.delete(
//     '/:id', 
//     GuideValidator.valIdExist(),
//     errorhandler,
//     delGuide,
//     )

router.use('', contentRouter)
router.use('', guideRouter)
router.use('/review', commentRouter);
router.use('', reviewRouter);
router.use('/review', recommentRouter);
router.use('', likeRouter)



export default router;
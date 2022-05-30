import {Router} from 'express';
import commentRouter from './comment';
import reviewRouter from './review';
import recommentRouter from './recomment'
import likeRouter from './like';
import contentRouter from './guideContent'
import guideRouter from './guide'



const router = Router();


router.use('', contentRouter)
router.use('', guideRouter)
router.use('/review', commentRouter);
router.use('', reviewRouter);
router.use('/review', recommentRouter);
router.use('', likeRouter)



export default router;
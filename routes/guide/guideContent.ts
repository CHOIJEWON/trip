import {Router} from 'express';
import { contentDel, contentGet, contentPost, contentPut } from '../../controllers/guide/guidecontent';
import GuideContentValidator from '../../middlewares/guide/guideContent';
import { errorhandler } from '../../middlewares/errorhandler';
import { verifyToken } from '../../middlewares/user';

const router = Router();

router.get(
    '/content/:id',
    GuideContentValidator.valGuideContentBlankData(),
    errorhandler,
    contentGet
    );
    
    router.post('/content/:id', 
    GuideContentValidator.valGuideContentTitleBlank(),
    GuideContentValidator.valGuideContentContentBlank(),
    errorhandler,
    verifyToken,
    contentPost
    );
    
    router.put(
    '/content/:id', 
    GuideContentValidator.valGuideContentExist(), 
    errorhandler,
    verifyToken,
    contentPut
    );
    
    
    router.delete(
    '/content/:id', 
    GuideContentValidator.valGuideContentExist(), 
    errorhandler,
    verifyToken,
    contentDel
    );

export default router
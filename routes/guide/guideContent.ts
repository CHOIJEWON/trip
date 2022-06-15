import {Router} from 'express';
import { contentDel, contentGet, contentPost, contentPut } from '../../controllers/guide/guideContent';
import GuideContentValidator from '../../middlewares/guide/guideContent';
import { errorhandler } from '../../middlewares/errorhandler';
import { verifyToken } from '../../middlewares/user';
import { catchGuideContentMe } from '../../middlewares/common';
import { valAdmin, valWriter } from '../../middlewares/user/role';

const router = Router();

router.get(
    '/content/:id',
    GuideContentValidator.valGuideContentBlankData(),
    errorhandler,
    contentGet
    );
    
    router.post('/content/:id', 
    verifyToken,
    valWriter || valAdmin,
    GuideContentValidator.valGuideContentTitleBlank(),
    GuideContentValidator.valGuideContentContentBlank(),
    errorhandler,
    contentPost
    );
    
    router.put(
    '/content/:id', 
    verifyToken,
    GuideContentValidator.valGuideContentExist(), 
    errorhandler,
    catchGuideContentMe || valAdmin,
    contentPut
    );
    
    
    router.delete(
    '/content/:id',
    verifyToken, 
    GuideContentValidator.valGuideContentExist(), 
    errorhandler,
    catchGuideContentMe || valAdmin,
    contentDel
    );

export default router
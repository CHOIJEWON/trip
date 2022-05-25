// import {Router} from 'express';
// import { delGuide, getGuide, guideOne, postGuide, updateGuide } from '../../controllers/guide/guide';
// import { contentDel, contentGet, contentPost, contentPut } from '../../controllers/guide/guidecontent';
// import GuideValidator from '../../middlewares/guide/guide';
// import GuideContentValidator from '../../middlewares/guide/guideContent';
// import { errorhandler } from '../../middlewares/errorhandler';
// import { signIn } from '../../controllers/user/user';
// import { verifyToken } from '../../middlewares/user';

// const router = Router();

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
//     contentPost
//     );
    
//     router.put(
//     '/content/:id', 
//     GuideContentValidator.valGuideContentExist(), 
//     errorhandler,
//     contentPut
//     );
    
    
//     router.delete(
//     '/content/:id', 
//     GuideContentValidator.valGuideContentExist(), 
//     errorhandler,
//     contentDel
//     );

// export default router
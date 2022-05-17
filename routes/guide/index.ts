import {Router} from 'express';
import { delGuide, getGuide, postGuide, updateGuide } from '../../controllers/guide/guide';
import { contentDel, contentGet, contentPost, contentPut } from '../../controllers/guide/guidecontent';
import GuideValidator from '../../middlewares/guide/guide';
import GuideContentValidator from '../../middlewares/guide/guideContent';
import { errorhandler } from '../../middlewares/errorhandler';



const router = Router();

// guide router
router.get(
    '/', 
    getGuide
);

router.post(
    '/',
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

router.get(
'/content/infor',
)



export default router;
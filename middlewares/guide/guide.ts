import { body, param } from 'express-validator';
import Guide from '../../models/guide';
import { ALL_GUIDE_CATEGORY, GuideCategory, isGuideCategory} from '../../types/guide';


export default class GuideValidator {
    static valTitleUnique(){
        return body('title').custom(async(value) => {
            return await Guide.findOne({ where : {
                title : value
            }}).then(guide => {
                if (guide) {
                    return Promise.reject('동일한 제목이 존재합니다');
                }
            });
        })
    }

    static valCategory(){
        return body('category').custom((value : GuideCategory) => {
            if(!isGuideCategory(value)) {
                return Promise.reject(`카테고리값은 ${ALL_GUIDE_CATEGORY.join('|')} 이어야 됩니다`);
            }
            return Promise.resolve()
        })
    };

    static valIdExist(){
        return param('id').custom(value => {
            return Guide.findOne({ where : {
                id : value
            }}).then(guide => {
                if (!guide) {
                    return Promise.reject('해당 게시물이 존재하지 않습니다');
                }
            });
        })
    }
}

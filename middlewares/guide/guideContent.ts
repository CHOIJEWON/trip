import { body, param, validationResult } from "express-validator";
import GuideContent from "../../models/guideContent";

export default class GuideContentValidator {
    static valGuideContentBlankData(){
        return body('id').custom(async()=> {
            return await GuideContent.findAll({}).
            then(guideContent => {
                if(guideContent === null){
                    return Promise.reject('게시글이 존재하지 않습니다')
                }
            })
        })
    };    
    
    static valGuideContentTitleBlank(){
        return body('title').
        isLength({ min : 1}).
        withMessage(' 제목을 입력해 주세요 ')          
    };

    static valGuideContentContentBlank(){
        return body('content').
        isLength({ 
            min : 1,
            max : 50,
        }).
        withMessage(' 게시물의 내용은 최소 1글자에서 50글자까지 입니다.')
    };

    static valGuideContentExist(){
        return param('id').custom(value => {
            return GuideContent.findOne( { where : {
                id : value
            }}).then(guideContent => {
                if(!guideContent){
                    return Promise.reject(' 해당 게시물을 찾을 수 없습니다 ')
                }
            });
        });
    };
}


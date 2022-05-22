import GuideContentModel from "../../models/guideContent"
import GuideContentImg from "../../models/guideContentImg"
import GuideContentImgModel from "../../models/guideContentImg"
import GuideCourseInfor from "../../models/guideCourseInfor"
import GuideCourseInforModel from "../../models/guideCourseInfor"
import { GuideContentDetails, GuideContent as GuideContentKey} from "../../types/guide"
import { GuideImgMainDetails } from "../../types/guideImg"
import { GuideContentImgKey } from "../../types/response/guideContentImg"
import ResponseGenerator from "../../utils/response"



export const guideContentGet = async() => {
    const guideContentFindAll = await GuideContentModel.findAll({
        include : [
            {
            model : GuideContentImgModel
        },
        {
            model : GuideCourseInforModel
        }
    ]
    })
    return ResponseGenerator.genSuccess<GuideContentImgKey[]>(guideContentFindAll) 
}

export const guideContentPost = async(data : GuideContentDetails, dataImg : GuideContentImgModel[], dataCourse : GuideCourseInforModel[]) => {
    
    // GuideContentPost
    const GuideContentPost = await GuideContentModel.create(data);

    // GuideImg bulkCreate 
    const GuideContentImgPost = await GuideContentImgModel.bulkCreate(dataImg);
    await GuideContentPost.addGuideContentImgs(GuideContentImgPost);

    // GuideCourseInfor bulkCreate
    const GuideCourseInforPost = await GuideCourseInforModel.bulkCreate(dataCourse)
    await GuideContentPost.addGuideCourseInfors(GuideCourseInforPost)

    // return value
    return ResponseGenerator.genSuccess<GuideContentModel>(GuideContentPost)
}

export const guideContentUpdate = async( data : GuideContentDetails, key : string, dataImg : GuideImgMainDetails[], dataCourse : GuideCourseInforModel[] ) => {
    const guideContentFindKey : GuideContentModel | null  = await GuideContentModel.findOne({
        where : { id : key},
        include : [
            {model : GuideContentImgModel},
            {model : GuideCourseInforModel},
        ]
    });

    if(guideContentFindKey !== null){
        
        // exit infor, img delete
        await GuideCourseInforModel.destroy({where : { guideContentId : guideContentFindKey.id }})
        await GuideContentImgModel.destroy({where : { guideContentId : guideContentFindKey.id }})

        // update and create
        const GuideContentImgPost = await GuideContentImgModel.bulkCreate(dataImg);
        const GuideCourseInforPost = await GuideCourseInforModel.bulkCreate(dataCourse)
        const GuideContentPostUpdate  = await guideContentFindKey.update(data)
        
        // add model
        await GuideContentPostUpdate.addGuideContentImgs(GuideContentImgPost);
        await GuideContentPostUpdate.addGuideCourseInfors(GuideCourseInforPost);

        // update
        await GuideContentPostUpdate.reload({include : [GuideContentImg, GuideCourseInfor]})

        // return value
        return ResponseGenerator.genSuccess<GuideContentModel>(GuideContentPostUpdate)
        

    } else {
        return ResponseGenerator.genfalse(400, '업데이트 불가능')
    }
}

export const guideContentDelete = async(key : string) => {

    // GuideContent Params Key Find
    const guideContentKeyFind : GuideContentModel | null = await GuideContentModel.findOne({
        where : { id : key }, 
        include : [{
            model : GuideContentImgModel
        }]
    })
    if(guideContentKeyFind !== null){

        // destroy Content, Img, Course
        await guideContentKeyFind.destroy()
        await GuideContentImgModel.destroy({
            where: {guideContentId: guideContentKeyFind.id}
        })
        await GuideCourseInforModel.destroy({
            where : {guideContentId : guideContentKeyFind.id}
        })

        // return value
        return ResponseGenerator.genSuccess<GuideContentModel>(guideContentKeyFind)
    } else {
        return ResponseGenerator.genfalse(400, '컨텐츠 삭제 error')
    }
}
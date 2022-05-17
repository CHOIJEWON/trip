import GuideContentModel from "../../models/guideContent"
import GuideContentImgModel from "../../models/guideContentImg"
import GuideCourseInforModel from "../../models/guideCourseInfor"
import { GuideContentDetails, GuideContent as GuideContentKey} from "../../types/guide"
import { GuideImgMainDetails } from "../../types/guideImg"
import { GuideContentImg, GuideContentImgKey } from "../../types/response/guideContentImg"


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
    return guideContentFindAll
}

export const guideContentPost = async(data : GuideContentDetails, dataImg : any, dataCourse : any) => {
    
    // GuideContentPost
    const GuideContentPost = await GuideContentModel.create(data);

    // GuideImg bulkCreate 
    const GuideContentImgPost = await GuideContentImgModel.bulkCreate(dataImg);
    await GuideContentPost.addGuideContentImgs(GuideContentImgPost);

    // GuideCourseInfor bulkCreate
    const GuideCourseInforPost = await GuideCourseInforModel.bulkCreate(dataCourse)
    await GuideContentPost.addGuideCourseInfors(GuideCourseInforPost)

    // return value
    return GuideContentPost
}

export const guideContentUpdate = async( data : GuideContentDetails, key : string, dataImg : GuideImgMainDetails[], dataCourse : any ) => {
    const guideContentFindKey : GuideContentModel | null  = await GuideContentModel.findOne({
        where : { id : key},
        include : [
            {model : GuideContentImgModel},
            {model : GuideCourseInforModel},
        ]
    });

    if(guideContentFindKey !== null){
        
        // exit infor, img delete
        const guideContentImgsFind =await GuideContentImgModel.findAll({ where : { guideContentId : guideContentFindKey.id }});
        const guideCourseInforsFind = await GuideCourseInforModel.findAll({ where : { guideContentId : guideContentFindKey.id }});
    
        
        await guideContentFindKey.removeGuideContentImgs(guideContentImgsFind);
        await guideContentFindKey.removeGuideCourseInfors(guideCourseInforsFind)

        // update and create
        const GuideContentImgPost = await GuideContentImgModel.bulkCreate(dataImg);
        const GuideCourseInforPost = await GuideCourseInforModel.bulkCreate(dataCourse)
        const GuideContentPostUpdate  = await guideContentFindKey.update(data)
        
        // add model
        await GuideContentPostUpdate.addGuideContentImgs(GuideContentImgPost);
        await GuideContentPostUpdate.addGuideCourseInfors(GuideCourseInforPost);

        GuideContentPostUpdate.GuideContentImgs = GuideContentImgPost
        GuideContentPostUpdate.GuideCourseInfors = GuideCourseInforPost

        // return value
        return GuideContentPostUpdate

    } else {
        return null
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

        // return value=[ㅋ]
        return guideContentKeyFind
    } else {
        return null
    }
}
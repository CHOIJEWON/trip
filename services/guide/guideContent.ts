
import GuideContent from "../../models/guideContent"
import GuideContentModel from "../../models/guideContent"
import GuideContentImg from "../../models/guideContentImg"
import GuideContentImgModel from "../../models/guideContentImg"
import GuideCourseInfor from "../../models/guideCourseInfor"
import GuideCourseInforModel from "../../models/guideCourseInfor"
import { GuideContentDetails, GuideContent as GuideContentKey} from "../../types/guide"
import { GuideImgMainDetails } from "../../types/guideImg"
import { GuideContentImgKey } from "../../types/response/guideContentImg"
import { decodedUser } from "../../types/response/user"
import ResponseGenerator from "../../utils/response"



export const guideContentGet = async(key : string) => {
    const guideContentFindOne = await GuideContentModel.findAll({
        where : { guideId : key },
        include : [
            {
            model : GuideContentImgModel
        },
        {
            model : GuideCourseInforModel
        }
    ]
    })
    return ResponseGenerator.genSuccess<GuideContent[]>(guideContentFindOne) 
}

export const guideContentPost = async( data : GuideContentKey , dataImg : GuideContentImgModel[] , dataCourse : GuideCourseInforModel[], user : decodedUser) => {
    // GuideContentPost
    const GuideContentPost = await GuideContentModel.create({
        ...data,
        userId : user.decodedUser
    });

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
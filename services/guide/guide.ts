import Guide from "../../models/guide";
import GuideContentModel from "../../models/guideContent";
import GuideContentImgModel from "../../models/guideContentImg";
import GuideCourseInforModel from "../../models/guideCourseInfor";
import viewModel from "../../models/view";
import { GuideDetails, Guide as GuideKey, GuideContentDetails } from "../../types/guide";
import { GuideCourseInforDetails } from "../../types/guideCourseInfor";
import { GuideContents, GuideCreate} from "../../types/inputType/guide";
import { GuideContentImg } from "../../types/response/guideContentImg";
import { GuidePost } from "../../types/response/guideResponse";
import { decodedUser } from "../../types/response/user";
import ResponseGenerator from "../../utils/response";


export const getGuideList = async() => { 
    const guides: GuideKey[] = await Guide.findAll({})
    return ResponseGenerator.genSuccess<GuideKey[]>(guides)
}

export const guideFindOne = async(key : string) => {
    const guide = await Guide.findOne({
        where : { id : key },
        include : [
        {model : viewModel, where : { guideId : key} },
        {model : GuideContentModel, where : {guideId : key}, 
        include : [
            {model : GuideContentImgModel, where : { guideContentId : key} },
            {model : GuideCourseInforModel, where : { guideContentId : key} },
        ]},
    ]   
    })
    if(guide === null) {
        return ResponseGenerator.genfalse(500, '데이터가 없습니다')
    } else {
        return ResponseGenerator.genSuccess<Guide>(guide)
    }
}

export const createGuidePost = async(data : GuideCreate, user : decodedUser, dataContent : GuideContents[], dataImg : GuideContentImg[], dataCours : GuideCourseInforDetails[]) => {
    const guideCreate = await Guide.create({
        ...data,
        userId : user.decodedUser
    })
    await viewModel.create({ guideId : guideCreate.id })
   
    const dataContentWithId = [];
    for(const content of dataContent) {
        dataContentWithId.push({
            ...content,
            userId: user.decodedUser,
            guideId: guideCreate.id
        })
    }

    const guideContent = await GuideContentModel.bulkCreate(dataContentWithId)
    await guideCreate.addGuideContents(guideContent)
    for(let oneGuideContent of guideContent) {
        const imgWithId = []
        const courseWithId = []
        for(const img of dataImg){
            imgWithId.push({
                ...img,
                guideContentId : oneGuideContent.id
            })
        }
        for( const course of dataCours ){
            courseWithId.push({
                ...course,
                guideContentId : oneGuideContent.id
            })
        }
        const img = await GuideContentImgModel.bulkCreate(imgWithId)
        await oneGuideContent.addGuideContentImgs(img)
        const infor = await GuideCourseInforModel.bulkCreate(courseWithId)
        await oneGuideContent.addGuideCourseInfors(infor)
        
        return ResponseGenerator.genSuccess<GuidePost>({ 
            guide : guideCreate, 
            GuideContent : guideContent, 
            GuideCotentImg :img, 
            GuideCourseInfor : infor,
        })
    }

 
}

export const update = async(key :string, data : GuideCreate) => { 
    const guideKeyFind : Guide | null = await Guide.findOne({
        where : { id : key } 
    })
    if(guideKeyFind !== null){
        const response = await guideKeyFind.update(data)
        return ResponseGenerator.genSuccess<GuideKey>(response)
    } else {
        return ResponseGenerator.genfalse(400, '잘못된 요청입니다');
    }
}

export const deleteGuide = async(key : string) => { 
    const guide = await Guide.findOne({
        where : { id : key },
        include : [
        {model : viewModel, where : { guideId : key} },
        {model : GuideContentModel, where : {guideId : key}, 
        include : [
            {model : GuideContentImgModel, where : { guideContentId : key} },
            {model : GuideCourseInforModel, where : { guideContentId : key} },
        ]},
    ]   
    })

    if(guide !== null) {
        await guide.destroy()
        await GuideContentModel.destroy({
            where : { guideId : guide.id}
        })
        await GuideContentImgModel.destroy({
            where : { guideContentId : guide.id}
        })
        await GuideCourseInforModel.destroy({
            where : { guideContentId : guide.id}
        })
        return ResponseGenerator.genSuccess<Guide>(guide)
    } else {
        return ResponseGenerator.genfalse(404, '존재하지 않는 게시물입니다')
    }
}
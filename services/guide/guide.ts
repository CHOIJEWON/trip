import Guide from "../../models/guide";
import viewModel from "../../models/view";
import { GuideDetails, Guide as GuideKey } from "../../types/guide";
import { decodedUser } from "../../types/response/user";
import ResponseGenerator from "../../utils/response";


export const getGuideList = async() => { 
    const guide: GuideKey[] = await Guide.findAll({})
    return ResponseGenerator.genSuccess<GuideKey[]>(guide)
}

export const guide = async(key : string) => {
    const guide = await Guide.findOne({
        where : { id : key },
        include : {model : viewModel, where : { guideId : key} }
    })
    if(guide === null) {
        return ResponseGenerator.genfalse(500, '데이터가 없습니다')
    } else {
        return ResponseGenerator.genSuccess<Guide>(guide)
    }
}

export const createGuidePost = async(data : GuideDetails, user : decodedUser) => { 
    const createGuide = await Guide.create({
        ...data,
        userId : user.decodedUser
    })
    await viewModel.create({guideId : createGuide.id})

    return ResponseGenerator.genSuccess<GuideDetails>(createGuide)
}

export const updateGuidePost = async(key :string, data : GuideDetails) => { 
    const guideKeyFind : Guide | null = await Guide.findOne({
        where : { id : key}
    })
    if(guideKeyFind !== null){
        const response = await guideKeyFind.update(data)
        return ResponseGenerator.genSuccess<GuideKey>(response)
    } else {
        return ResponseGenerator.genfalse(400, '잘못된 요청입니다');
    }
}

export const deleteGuidePost = async(key : string) => { 
   const guideKeyFind : Guide | null = await Guide.findOne({
        where : { id : key }
    })

    if(guideKeyFind !== null) {
        await guideKeyFind.destroy()
        return ResponseGenerator.genSuccess<Guide>(guideKeyFind)
    } else {
        return ResponseGenerator.genfalse(404, '존재하는 않는 게시물입니다')
    }
}
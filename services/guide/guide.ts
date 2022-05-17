import Guide from "../../models/guide";
import { GuideDetails, Guide as GuideKey } from "../../types/guide";
import ResponseGenerator from "../../utils/response";
import { errorhandler } from "../../middlewares/errorhandler";


export const getGuideList = async() => { 
    const guide: GuideKey[] = await Guide.findAll({})
    return guide
}

export const createGuidePost = async(data : GuideDetails) => { 
    const createGuide = await Guide.create(data)
    return createGuide
}

export const updateGuidePost = async(key :string, data : GuideDetails) => { 
    const guideKeyFind : Guide | null = await Guide.findOne({
        where : { id : key}
    })
    if(guideKeyFind !== null){
        const response = await guideKeyFind.update(data)
        return response
    } else {
        return null
    }
}

export const deleteGuidePost = async(key : string) => { 
   const guideKeyFind : Guide | null = await Guide.findOne({
        where : { id : key }
    })

    if(guideKeyFind !== null) {
        const response : GuideKey = await guideKeyFind.destroy().then()
        return response
    } else {
        return null
    }
}
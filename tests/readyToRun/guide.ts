import { createGuidePost } from "../../services/guide/guide"
import { GuideContentDetails } from "../../types/guide"
import { GuideCourseInforDetails } from "../../types/guideCourseInfor"
import { GuideCreate } from "../../types/inputType/guide"
import { GuideContentImg } from "../../types/response/guideContentImg"
import { readySignIn, readySignUp } from "./user"


export const readyGuideWrite = async() => {
    
    const sign = await readySignUp()
    await readySignIn()

    const guide : GuideCreate = {
        title : "post refactorin4567 입니다",
        mainImage : "http://www.travelnbike.com/news/photo/201903/77604_141293_4837.png",
        content : "4입력입니다",
        category : "mon",
    }

    const contents : GuideContentDetails[] = [{
        title : "1234",
        content : "가이드 콘텐츠 작성",
        courseRecommend :  "GuideRecommend Test",
    }]

    const imgs : GuideContentImg[] = [{
        imgURL : "img4",
    }]

    const courses : GuideCourseInforDetails[]  = [{
        latitude : "123",
        longitude : "1234",
        title : "test",
        category : "trip",
        sequence : 1,
        visitTime : `1` ,
        takeTime : "15분",
    }]

    //whene
    await createGuidePost(guide, {decodedUser : sign}, contents, imgs, courses)
    return sign
}